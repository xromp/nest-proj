import { Param } from '@nestjs/common';
import { EntityRepository, AbstractRepository } from 'typeorm';
import {
  GetCompanyDto,
  UpdateCompanyDto,
} from '../company/dto/update-company.dto';
import { CreateCompanyDto } from '../company/dto/create-company.dto';
import { Company } from './entities/company.entity';

@EntityRepository(Company)
export class CompanyRepository extends AbstractRepository<Company> {
  create(driver: CreateCompanyDto) {
    return this.repository.save(driver);
  }

  findByQry(param: GetCompanyDto) {
    return this.repository.find(param);
  }

  findEmailAndPassword(param: GetCompanyDto) {
    return this.repository.findOne(param);
  }

  findOne(criteria: GetCompanyDto) {
    return this.repository.findOne(criteria);
  }

  findById(id) {
    return this.repository.findOne({ id });
  }

  update(criteria: UpdateCompanyDto, driver: UpdateCompanyDto) {
    return this.repository.update(criteria, driver);
  }
}
