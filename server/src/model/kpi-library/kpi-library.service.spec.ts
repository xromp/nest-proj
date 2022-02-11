import { Test, TestingModule } from '@nestjs/testing';
import { KpiLibaryService } from './kpi-libary.service';

describe('KpiLibaryService', () => {
  let service: KpiLibaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KpiLibaryService],
    }).compile();

    service = module.get<KpiLibaryService>(KpiLibaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
