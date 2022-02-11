import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

export = [
  {
    //name: 'default',
    type: 'mssql',
    host: process.env.DEFAULT_DB_HOST,
    username: process.env.DEFAULT_DB_USERNAME,
    password: process.env.DEFAULT_DB_PASSWORD,
    database: process.env.DEFAULT_DB_NAME,
    options: {
      instanceName: process.env.DEFAULT_DB_INSTANCE,
      enableArithAbort: false,
    },
    dropSchema: false,
    synchronize: false,
    migrations: [join(__dirname, '..', 'model/migration/*.{ts,js}')],
    cli: {
      migrationsDir: 'src/model/migration',
    },
    entities: [
      join(__dirname, '..', 'model/entity/default/**/*.entity.{ts,js}'),
    ],
  } as TypeOrmModuleOptions,
  {
    name: 'other',
    type: 'mssql',
    host: process.env.OTHER_DB_HOST,
    username: process.env.OTHER_DB_USERNAME,
    password: process.env.OTHER_DB_PASSWORD,
    database: process.env.OTHER_DB_NAME,
    options: {
      instanceName: process.env.OTHER_DB_INSTANCE,
      enableArithAbort: false,
    },
    dropSchema: false,
    synchronize: false,
    migrationsRun: false,
    entities: [],
  } as TypeOrmModuleOptions,
];
