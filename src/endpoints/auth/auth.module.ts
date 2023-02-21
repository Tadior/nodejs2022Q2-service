import { Module } from '@nestjs/common';
import { LoginModule } from './login/login/login.module';
import { SignUpModule } from './signUp/signUp.module';

@Module({
  imports: [SignUpModule, LoginModule],
})
export class AuthModule {}
