import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EthersService } from '@app/ethers';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ethersService: EthersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('chainid')
  getChainId(): number {
    return this.ethersService.getChainId();
  }
}
