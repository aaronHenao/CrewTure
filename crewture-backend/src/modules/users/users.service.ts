import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ResponseUserDto } from './dto/reponse-user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}

  async create(createUser: CreateUserDto): Promise<ResponseUserDto> {
    const existingUser = await this.userRepository.findOne({where: {googleID: createUser.googleID}});

    if(existingUser){
      throw new BadRequestException('El usuario ya existe')
    }
    const newUser = await this.userRepository.create(createUser);
    const saved = await this.userRepository.save(newUser);
    return plainToInstance(ResponseUserDto, saved, {excludeExtraneousValues:true})
  }

  async findByGoogleId(id: string): Promise<ResponseUserDto | null>{
    const user = await this.userRepository.findOne({where: {googleID: id}});

    if(!user){
      return null;
    }

    return plainToInstance(ResponseUserDto, user, {excludeExtraneousValues: true})
  }

  async findByUuid(uuid:string): Promise<User>{
    const user = await this.userRepository.findOne({where: {uuid: uuid}});

    if(!user){
      throw new NotFoundException('El usuario no existe');
    }

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
