import { Injectable } from '@nestjs/common';
import { EthereumProvider } from '@app/ethersv5/eth-provider';
import { logger } from './utils/winston.config';
import { CreateHelloDto } from './dto';

@Injectable()
export class AppService {
  private strHello: string;
  constructor(private readonly ethereumProvider: EthereumProvider) {
    this.strHello = 'init';
  }

  async getHello(): Promise<string> {
    const chainLayer = process.env.CHAIN_LAYER;
    const endPoint = process.env.SP_ENDPOINT;
    const client = new EthereumProvider(endPoint, 15005, 5000);
    const provider = client.getProvider();
    const chainId = await provider.getNetwork();

    const res = `Hello Block Chain ${chainLayer} ${chainId.chainId}`;
    logger.log('elk', 'testtest');
    return res;
  }

  async createHello(hello: CreateHelloDto): Promise<string> {
    this.strHello = hello.hello;
    return this.strHello;
  }

  findOne(): string {
    console.log('findOne', this.strHello);
    return this.strHello;
  }
}
