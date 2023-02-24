import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Scope } from '@nestjs/common/interfaces';
// import * as fs from 'node:fs/promises';
// import path from 'node:path'
@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger extends ConsoleLogger {
  constructor() {
    super();
  }
  customLog(data: any) {
    this.log(JSON.stringify(data));
    // this.
    // fs.writeFile(path.resolve(__dirname, 'logs.txt'));
  }
}
