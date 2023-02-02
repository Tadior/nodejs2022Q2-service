import { IsString, MinLength } from 'class-validator';

interface IUpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export class UpdatePasswordDto implements IUpdatePasswordDto {
  @IsString()
  @MinLength(5)
  oldPassword: string;
  @IsString()
  @MinLength(5)
  newPassword: string;
}
