import { Injectable } from '@nestjs/common';
import { CreatePendingApprovalDto } from './dto/create-pending-approval.dto';
import { UpdatePendingApprovalDto } from './dto/update-pending-approval.dto';

@Injectable()
export class PendingApprovalService {
  create(createPendingApprovalDto: CreatePendingApprovalDto) {
    return 'This action adds a new pendingApproval';
  }

  findAll() {
    return `This action returns all pendingApproval`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendingApproval`;
  }

  update(id: number, updatePendingApprovalDto: UpdatePendingApprovalDto) {
    return `This action updates a #${id} pendingApproval`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendingApproval`;
  }
}
