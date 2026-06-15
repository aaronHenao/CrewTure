import { Expose } from "class-transformer";

export class ResponseUserDto {

  @Expose()
  uuid!: string;

  @Expose()
  email!: string;

  @Expose()
  firstName!: string;

  @Expose()
  lastName!: string;
  
  @Expose()
  avatar?: string;
  
  @Expose()
  createdAt!: Date;
}