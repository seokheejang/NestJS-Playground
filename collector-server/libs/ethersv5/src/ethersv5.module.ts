import { Module } from '@nestjs/common';
import { Ethersv5Service } from './ethersv5.service';

@Module({
  providers: [Ethersv5Service],
  exports: [Ethersv5Service],
})
export class Ethersv5Module {}
