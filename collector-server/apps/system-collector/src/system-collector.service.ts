import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemCollectorService {
  getHello(): string {
    return 'Hello World!';
  }
}
