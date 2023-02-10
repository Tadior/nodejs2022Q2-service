import * as dotenv from 'dotenv';
import { UserEntity } from 'src/endpoints/user/entity/user.entity';
import { DataSourceOptions } from 'typeorm';

dotenv.config();

export default {
  type: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [UserEntity],
  synchronize: true,
  logging: false,
} as DataSourceOptions;
