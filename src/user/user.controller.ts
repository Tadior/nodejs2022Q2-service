import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/types/apiTypes';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  getAllUsers() {
    return this.service.getAllUsers();
  }
  @Post()
  createUser(@Body() createUserDto: User) {
    return this.service.create(createUserDto);
  }
}
