import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReporteAnaliticaModule } from './infrastructure/modules/reporte-analitica.module';

@Module({
  imports: [ReporteAnaliticaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
