import { Injectable } from '@nestjs/common';

@Injectable()
export class SubappService {
  getHello(): string {
    return 'Hello World!';
  }
}
