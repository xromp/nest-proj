import { Param } from '@nestjs/common';
import { EntityRepository, AbstractRepository } from 'typeorm';
import { GetDriverDto, UpdateDriverDto } from './dto/update-driver.dto';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './entities/driver.entity';

@EntityRepository(Driver)
export class DriverRepository extends AbstractRepository<Driver> {
  create(driver: CreateDriverDto) {
    return this.repository.save(driver);
  }

  findByQry(param: GetDriverDto) {
    return this.repository.find(param);
  }

  findEmailAndPassword(param: GetDriverDto) {
    return this.repository.findOne(param);
  }

  findOne(criteria: GetDriverDto) {
    return this.repository.findOne(criteria);
  }

  findById(id) {
    return this.repository.findOne({ id });
  }

  update(criteria: UpdateDriverDto, driver: UpdateDriverDto) {
    return this.repository.update(criteria, driver);
  }
}
