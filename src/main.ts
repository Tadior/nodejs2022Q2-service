import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { CustomLogger } from './logger/customLogger.service';
// import { logger } from './logger/logger.middleware';

dotenv.config();
const port = process.env.PORT ? process.env.PORT : 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(new CustomLogger());
  // app.use(new LoggerMiddleware(new CustomLogger()));
  await app.listen(port);
}
bootstrap();
