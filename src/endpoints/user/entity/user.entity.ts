import { Column, Entity, PrimaryColumn } from 'typeorm';

interface ICreateUserDto {
  login: string;
  password: string;
}

@Entity('user')
export class UserEntity implements ICreateUserDto {
  @PrimaryColumn()
  login: string;
  @Column()
  password: string;
}
