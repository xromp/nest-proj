import { EntityRepository, AbstractRepository } from 'typeorm';
import {
  GetPendingApprovalDto,
  UpdatePendingApprovalDto,
} from './dto/update-pending-approval.dto';
import { CreatePendingApprovalDto } from './dto/create-pending-approval.dto';
import { PendingApproval } from './entities/pending-approval.entity';

@EntityRepository(PendingApproval)
export class PendingApprovalRepository extends AbstractRepository<PendingApproval> {
  create(approval: CreatePendingApprovalDto) {
    return this.repository.save(approval);
  }

  findByQry(param: GetPendingApprovalDto) {
    return this.repository.find(param);
  }

  findOne(criteria: GetPendingApprovalDto) {
    return this.repository.findOne(criteria);
  }

  findById(id) {
    return this.repository.findOne({ id });
  }

  update(criteria: UpdatePendingApprovalDto, driver: UpdatePendingApprovalDto) {
    return this.repository.update(criteria, driver);
  }
}
