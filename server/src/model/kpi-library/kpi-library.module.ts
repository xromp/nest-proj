import { Module } from '@nestjs/common';
import { KpiLibraryService } from './kpi-library.service';
import { KpiLibraryController } from './kpi-library.controller';

@Module({
  controllers: [KpiLibraryController],
  providers: [KpiLibraryService],
})
export class KpiLibaryModule {}
