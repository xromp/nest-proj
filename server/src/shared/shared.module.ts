import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from 'src/model/account/account.repository';
import { DriverRepository } from 'src/model/driver/driver.repository';
import { KpiLibaryModule } from 'src/model/kpi-library/kpi-library.module';
import { KPILibraryRepository } from 'src/model/kpi-library/kpi-library.repository';
import { OrgRepository } from 'src/model/org/org.repository';
import { CompanyRepository } from 'src/model/company/company.repository';
import { UserRepository } from 'src/model/user/user.repository';
import { PendingApprovalRepository } from 'src/model/pending-approval/pending-approval.repository';

@Global()
@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      AccountRepository,
      DriverRepository,
      KPILibraryRepository,
      OrgRepository,
      CompanyRepository,
      UserRepository,
      PendingApprovalRepository,
    ]),
  ],
  providers: [],
  exports: [
    HttpModule,
    TypeOrmModule.forFeature([
      AccountRepository,
      DriverRepository,
      KPILibraryRepository,
      OrgRepository,
      CompanyRepository,
      UserRepository,
      PendingApprovalRepository,
    ]),
  ],
})
export class SharedModule {}
