import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty({message: 'El googleID es obligatorio'})
    googleID!: string

    @IsNotEmpty({message: 'El email es obligatorio'})
    email!: string

    @IsNotEmpty({message: 'El nombre es obligatorio'})
    firstName!: string

    @IsNotEmpty({message: 'El apellido es obligatorio'})
    lastName!: string

    @IsOptional()
    @IsString()
    avatar?: string;
}
