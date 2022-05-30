import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfGeneratorModule } from './pdf_generator/pdf_generator.module';

@Module({
  imports: [PdfGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
