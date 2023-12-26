import { EthereumProvider } from './eth-provider';

describe('EthProvider', () => {
  it('should be defined', () => {
    expect(new EthereumProvider()).toBeDefined();
  });
});
