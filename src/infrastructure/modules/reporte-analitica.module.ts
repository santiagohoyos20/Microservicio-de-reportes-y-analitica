import { Module } from '@nestjs/common';
import { ReporteAnaliticaController } from './reporte-analitica.controller';
import { ReporteAnaliticaService } from '../../application/services/reporte-analitica.service';

@Module({
  controllers: [ReporteAnaliticaController],
  providers: [ReporteAnaliticaService]
})
export class ReporteAnaliticaModule {}
