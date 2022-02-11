import { Param } from '@nestjs/common';
import { EntityRepository, AbstractRepository } from 'typeorm';
import {
  GetKpiLibraryDto,
  UpdateKpiLibraryDto,
} from './dto/update-kpi-library.dto';
import { CreateKpiLibraryDto } from './dto/create-kpi-library.dto';
import { KPILibrary } from './entities/kpi-library.entity';

@EntityRepository(KPILibrary)
export class KPILibraryRepository extends AbstractRepository<KPILibrary> {
  create(driver: CreateKpiLibraryDto) {
    return this.repository.save(driver);
  }

  findByQry(param: GetKpiLibraryDto) {
    return this.repository.find(param);
  }

  findEmailAndPassword(param: GetKpiLibraryDto) {
    return this.repository.findOne(param);
  }

  findOne(criteria: GetKpiLibraryDto) {
    return this.repository.findOne(criteria);
  }

  findById(id) {
    return this.repository.findOne({ id });
  }

  update(criteria: UpdateKpiLibraryDto, driver: UpdateKpiLibraryDto) {
    return this.repository.update(criteria, driver);
  }
}
