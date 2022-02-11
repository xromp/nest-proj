import { Injectable } from '@nestjs/common';
import { CreateKpiLibraryDto } from './dto/create-kpi-library.dto';
import { UpdateKpiLibraryDto } from './dto/update-kpi-library.dto';

@Injectable()
export class KpiLibraryService {
  create(createKpiLibraryDto: CreateKpiLibraryDto) {
    return 'This action adds a new kpiLibary';
  }

  findAll() {
    return `This action returns all kpiLibary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kpiLibary`;
  }

  update(id: number, updateKpiLibraryDto: UpdateKpiLibraryDto) {
    return `This action updates a #${id} kpiLibary`;
  }

  remove(id: number) {
    return `This action removes a #${id} kpiLibary`;
  }
}
