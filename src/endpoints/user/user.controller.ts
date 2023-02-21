import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IdDto } from 'src/dto/id.dto';
import { WhitelistPipe } from 'src/validation/whitelist.validation';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  getAllUsers() {
    return this.service.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.getUserById(id);
  }
  @Post()
  createUser(
    @Body(WhitelistPipe)
    body: CreateUserDto,
  ) {
    return this.service.create(body);
  }
  @Put(':id')
  updatePassword(
    @Param('id', ParseUUIDPipe) id: IdDto,
    @Body(WhitelistPipe) body: UpdatePasswordDto,
  ) {
    return this.service.updatePassword(id, body);
  }
  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id', ParseUUIDPipe) id: IdDto) {
    return this.service.deleteUser(id);
  }
}
