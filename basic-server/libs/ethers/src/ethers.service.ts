import { Injectable } from '@nestjs/common';

@Injectable()
export class EthersService {
  getChainId(): number {
    return 1;
  }
}
