import { Module } from '@nestjs/common';
import { PendingApprovalService } from './pending-approval.service';
import { PendingApprovalController } from './pending-approval.controller';
import { UserService } from '../user/user.service';
import { AccountService } from '../account/account.service';

@Module({
  controllers: [PendingApprovalController],
  providers: [PendingApprovalService, UserService, AccountService],
})
export class PendingApprovalModule {}
