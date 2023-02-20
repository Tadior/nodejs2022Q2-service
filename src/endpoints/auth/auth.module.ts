import { Module } from '@nestjs/common';
import { SignUpModule } from './signUp/signUp.module';

@Module({
  imports: [SignUpModule],
})
export class AuthModule {}
