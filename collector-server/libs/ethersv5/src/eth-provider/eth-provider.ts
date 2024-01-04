import { ethers } from 'ethers';

export class EthereumProvider {
  private provider: ethers.providers.StaticJsonRpcProvider;

  constructor(url: string, chainId: number, timeout: number) {
    this.setProvider(url, chainId, timeout);
  }

  public setProvider(url: string, chainId: number, timeout: number) {
    const connection = { url: url, timeout: timeout };
    this.provider = new ethers.providers.StaticJsonRpcProvider(
      connection,
      chainId,
    );
  }

  public getProvider() {
    return this.provider;
  }
}
