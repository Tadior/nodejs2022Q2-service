import { MinLength, IsString } from 'class-validator';

interface ICreateUserDto {
  login: string;
  password: string;
}

export class CreateUserDto implements ICreateUserDto {
  @IsString()
  @MinLength(3)
  login: string;
  @IsString()
  @MinLength(5)
  password: string;
}
