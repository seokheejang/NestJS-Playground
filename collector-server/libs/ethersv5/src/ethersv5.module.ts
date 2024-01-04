import { Module } from '@nestjs/common';
import { Ethersv5Service } from './ethersv5.service';
import { EthereumProvider } from './eth-provider';

@Module({
  providers: [Ethersv5Service, EthereumProvider],
  exports: [Ethersv5Service, EthereumProvider],
})
export class Ethersv5Module {}
