import { Param } from '@nestjs/common';
import { EntityRepository, AbstractRepository } from 'typeorm';
import { GetOrgDto, UpdateOrgDto } from './dto/update-org.dto';
import { CreateOrgDto } from './dto/create-org.dto';
import { Org } from './entities/org.entity';

@EntityRepository(Org)
export class OrgRepository extends AbstractRepository<Org> {
  create(org: CreateOrgDto) {
    return this.repository.save(org);
  }

  findByQry(param: GetOrgDto) {
    return this.repository.find(param);
  }

  findEmailAndPassword(param: GetOrgDto) {
    return this.repository.findOne(param);
  }

  findOne(criteria: GetOrgDto) {
    return this.repository.findOne(criteria);
  }

  findById(id) {
    return this.repository.findOne({ id });
  }

  update(criteria: UpdateOrgDto, driver: UpdateOrgDto) {
    return this.repository.update(criteria, driver);
  }
}
