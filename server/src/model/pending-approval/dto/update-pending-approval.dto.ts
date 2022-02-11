import { PartialType } from '@nestjs/swagger';
import { CreatePendingApprovalDto } from './create-pending-approval.dto';

export class UpdatePendingApprovalDto extends PartialType(
  CreatePendingApprovalDto,
) {}
export class GetPendingApprovalDto extends PartialType(
  CreatePendingApprovalDto,
) {}
