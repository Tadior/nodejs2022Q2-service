import {
  Body,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WhitelistPipe } from 'src/validation/whitelist.validation';
import { RefreshEntity } from './entity/refresh.entity';
import { RefreshService } from './refresh.service';

@Controller('auth')
export class RefreshController {
  constructor(private readonly service: RefreshService) {}
  @Post('refresh')
  @HttpCode(200)
  @UsePipes(
    new ValidationPipe({
      exceptionFactory: () => {
        return new UnauthorizedException(
          'Body must contain field refreshToken and it must be string',
        );
      },
    }),
  )
  getRefreshToken(@Body(WhitelistPipe) body: RefreshEntity) {
    return this.service.getRefreshToken(body);
  }
}
