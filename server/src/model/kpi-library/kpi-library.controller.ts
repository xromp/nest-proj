import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KpiLibraryService } from './kpi-library.service';
import { CreateKpiLibraryDto } from './dto/create-kpi-library.dto';
import { UpdateKpiLibraryDto } from './dto/update-kpi-library.dto';
import { KPILibraryRepository } from './kpi-library.repository';

@Controller('kpi-library')
export class KpiLibraryController {
  constructor(
    private readonly KpiLibraryService: KpiLibraryService,
    private readonly kpiLibaryRepository: KPILibraryRepository,
  ) {}

  @Post()
  create(@Body() createKpiLibraryDto: CreateKpiLibraryDto) {
    return this.kpiLibaryRepository.create(createKpiLibraryDto);
  }

  @Get()
  findAll() {
    return this.kpiLibaryRepository.findByQry({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.KpiLibraryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKpiLibraryDto: UpdateKpiLibraryDto,
  ) {
    return this.KpiLibraryService.update(+id, updateKpiLibraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.KpiLibraryService.remove(+id);
  }
}
