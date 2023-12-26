import { Controller, Get } from '@nestjs/common';
import { SubappService } from './subapp.service';

@Controller()
export class SubappController {
  constructor(private readonly subappService: SubappService) {}

  @Get()
  getHello(): string {
    return this.subappService.getHello();
  }
}
