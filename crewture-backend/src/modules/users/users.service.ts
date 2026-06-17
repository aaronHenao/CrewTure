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

  async update(uuid: string, updateUserDto: UpdateUserDto): Promise<ResponseUserDto> {
    const existingUser = await this.userRepository.findOne({where: {uuid: uuid}});

    if(!existingUser){
      throw new NotFoundException('El usuario no existe');
    }
    
    existingUser.avatar = updateUserDto.avatar!;

    const updateddUser = this.userRepository.save(existingUser);

    return plainToInstance(ResponseUserDto, existingUser, {excludeExtraneousValues: true});

  }
}
