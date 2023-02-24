import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CustomLogger } from './customLogger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly customLogger: CustomLogger) {}
  use(req: Request, res: Response, next: NextFunction) {
    const body = JSON.stringify(req.body);
    const query = JSON.stringify(req.query);

    res.on('finish', () => {
      const out = `Url: ${req.url}, query: ${query}, body: ${body}, response status: ${res.statusCode}`;
      this.customLogger.customLog(out);
      // fs.appendFile(
      //   path.resolve(__dirname, 'logs.txt'),
      //   out,
      //   { flag: 'w+' },
      //   (err) => {
      //     if (err) {
      //       console.error(err);
      //     }
      //   },
      // );
      // console.log(__dirname);
      // console.log(path.resolve(__dirname, '..'));
      // console.log(path.resolve(__dirname, 'logs.txt'));

      // fsPromise.appendFile(
      //   path.resolve(process.cwd(), 'dist', 'logs.txt'),
      //   out,
      //   {
      //     flag: 'w+',
      //   },
      // );
    });

    next();
  }
}
