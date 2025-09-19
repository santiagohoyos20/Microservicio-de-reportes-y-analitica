import { Test, TestingModule } from '@nestjs/testing';
import { ReporteAnaliticaController } from '../../reporte-analitica/reporte-analitica.controller';

describe('ReporteAnaliticaController', () => {
  let controller: ReporteAnaliticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporteAnaliticaController],
    }).compile();

    controller = module.get<ReporteAnaliticaController>(ReporteAnaliticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
