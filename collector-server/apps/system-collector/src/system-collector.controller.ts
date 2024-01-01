import { Controller, Get } from '@nestjs/common';
import { SystemCollectorService } from './system-collector.service';

@Controller()
export class SystemCollectorController {
  constructor(private readonly systemCollectorService: SystemCollectorService) {}

  @Get()
  getHello(): string {
    return this.systemCollectorService.getHello();
  }
}
