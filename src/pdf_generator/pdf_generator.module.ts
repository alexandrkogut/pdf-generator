import { Module } from '@nestjs/common';
import { PdfGeneratorController } from './pdf_generator.controller';
import { PdfGeneratorService } from './pdf_generator.service';

@Module({
  controllers: [PdfGeneratorController],
  providers: [PdfGeneratorService],
})
export class PdfGeneratorModule {}
