import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from 'src/endpoints/user/entity/user.entity';
import { Repository } from 'typeorm';
import { AuthEntity } from '../../entity/auth.entity';

dotenv.config();

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async login(@Body() authDto: AuthEntity) {
    const { login, password } = authDto;
    const user = await this.userRepository.findOneBy({ login });
    if (!user) {
      throw new HttpException(
        "User with such login isn't found",
        HttpStatus.FORBIDDEN,
      );
    }
    const token = this.generateAccessToken(user.id, user.login);
    return { token };
  }
  private generateAccessToken(id: string, login: string) {
    const payload = { id, login };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
  }
}
