import { Test, TestingModule } from '@nestjs/testing';
import { Ethersv5Service } from './ethersv5.service';

describe('Ethersv5Service', () => {
  let service: Ethersv5Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ethersv5Service],
    }).compile();

    service = module.get<Ethersv5Service>(Ethersv5Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
