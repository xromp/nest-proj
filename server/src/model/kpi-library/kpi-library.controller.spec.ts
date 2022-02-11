import { Test, TestingModule } from '@nestjs/testing';
import { KpiLibraryController } from './kpi-library.controller';
import { KpiLibraryService } from './kpi-library.service';

describe('KpiLibraryController', () => {
  let controller: KpiLibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KpiLibraryController],
      providers: [KpiLibraryService],
    }).compile();

    controller = module.get<KpiLibraryController>(KpiLibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
