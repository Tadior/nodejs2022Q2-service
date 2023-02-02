import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/types/apiTypes';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { IdDto } from 'src/dto/id.dto';
// import { Param } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  getAllUsers() {
    return this.service.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: IdDto) {
    return this.service.getUserById(id);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }
  @Put(':id')
  updatePassword(@Param('id') id: IdDto, @Body() body: UpdatePasswordDto) {
    return this.service.updatePassword(id, body);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: IdDto) {
    return this.service.deleteUser(id);
  }
}
