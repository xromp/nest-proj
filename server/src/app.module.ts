import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';

import { TypeOrmConfigService } from './config/database/type-orm-config/type-orm-config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './model/account/account.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { DriverModule } from './model/driver/driver.module';
import { CompanyModule } from './model/company/company.module';
import { UserModule } from './model/user/user.module';
import { KpiLibaryModule } from './model/kpi-library/kpi-library.module';
import { OrgModule } from './model/org/org.module';
import { PendingApprovalModule } from './model/pending-approval/pending-approval.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.errors({ stack: true }),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/info/'),
          filename: 'info.log',
          level: 'info',
        }),
      ],
    }),
    AccountModule,
    SharedModule,
    AuthModule,
    DriverModule,
    CompanyModule,
    UserModule,
    KpiLibaryModule,
    OrgModule,
    CompanyModule,
    UserModule,
    PendingApprovalModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
