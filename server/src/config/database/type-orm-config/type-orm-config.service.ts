import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { getConnectionManager } from 'typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject('winston')
    private readonly logger: Logger,
  ) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    let name = 'enigma';
    this.logger.info(`Database connected!`);
    const conn = getConnectionManager();
    if (conn.has('enigma')) name += new Date().getTime();
    return {
      name,
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname, 'dist/**/*.entity{.ts,.js}'],
      migrations: ['src/database/migration/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/database/migration',
      },
    };
  }
}
