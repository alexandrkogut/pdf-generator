import { Controller, Get, Res } from '@nestjs/common';
import { PdfGeneratorService } from './pdf_generator.service';

@Controller('pdf-generator')
export class PdfGeneratorController {
  constructor(private PdfGeneratorService: PdfGeneratorService) {}

  @Get()
  async testController(@Res() res: Response): Promise<void> {
    const buffer = await this.PdfGeneratorService.getData();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': buffer.length,
    });

    stream.pipe(res);
  }
}
