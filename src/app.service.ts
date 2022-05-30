import { Injectable } from '@nestjs/common';
// import { InjectPage } from 'nest-puppeteer';
// import { InjectBrowser } from 'nest-puppeteer';
// import type { Page } from 'puppeteer';
// import type { Browser } from 'puppeteer';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectPage() private readonly page: Page,
  //   @InjectBrowser() private readonly browser: Browser,
  // ) {}
  //
  // async generatePDF(): Promise<Buffer> {
  //   const html = `
  //   <html>
  //     <head>
  //         <title>Test html</title>
  //     </head>
  //     <body>
  //         <h1>Hello pdf!</h1>
  //     </body>
  //   </html>`;
  //
  //   const page = await this.browser.newPage();
  //   await page.setContent(html);
  //
  //   const buffer = await page.pdf({
  //     format: 'A4',
  //     printBackground: true,
  //     margin: {
  //       left: '0px',
  //       top: '0px',
  //       right: '0px',
  //       bottom: '0px',
  //     },
  //   });
  //
  //   await this.browser.close();
  //
  //   return buffer;
  // }
}
