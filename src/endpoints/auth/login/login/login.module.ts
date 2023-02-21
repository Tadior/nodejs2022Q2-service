import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/endpoints/user/user.module';
import { AuthEntity } from '../../entity/auth.entity';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthEntity]), UserModule],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
