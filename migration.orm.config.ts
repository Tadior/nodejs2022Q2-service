import 'dotenv/config';
import { DataSource } from 'typeorm';

export const config = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.POSTGRES_PORT as string) as number,
  username: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DB as string,
  entities: [__dirname + '/**/*.entity.ts'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts}'],
});
