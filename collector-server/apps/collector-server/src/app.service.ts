import { Injectable } from '@nestjs/common';
import { EthereumProvider } from '@app/ethersv5/eth-provider';

@Injectable()
export class AppService {
  constructor(private readonly ethereumProvider: EthereumProvider) {}

  async getHello(): Promise<string> {
    const chainLayer = process.env.CHAIN_LAYER;
    const endPoint = process.env.SP_ENDPOINT;
    const client = new EthereumProvider(endPoint, 15005, 5000);
    const provider = client.getProvider();
    const chainId = await provider.getNetwork();

    const res = `Hello Block Chain ${chainLayer} ${chainId.chainId}`;
    return res;
  }
}
