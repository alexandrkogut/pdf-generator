import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfGeneratorService {
  async getData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const html = `
        <html>
          <head>
              <title>Test html</title>
          </head>
          <body>
              <h1>Hello pdf!</h1>
          </body>
        </html>`;

    await page.setContent(html);

    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
      },
    });

    await browser.close();

    return buffer;
  }
}
