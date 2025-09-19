import { Test, TestingModule } from '@nestjs/testing';
import { ReporteAnaliticaService } from './reporte-analitica.service';

describe('ReporteAnaliticaService', () => {
  let service: ReporteAnaliticaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteAnaliticaService],
    }).compile();

    service = module.get<ReporteAnaliticaService>(ReporteAnaliticaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
