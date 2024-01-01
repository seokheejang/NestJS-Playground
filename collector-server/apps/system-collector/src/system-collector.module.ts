import { Module } from '@nestjs/common';
import { SystemCollectorController } from './system-collector.controller';
import { SystemCollectorService } from './system-collector.service';

@Module({
  imports: [],
  controllers: [SystemCollectorController],
  providers: [SystemCollectorService],
})
export class SystemCollectorModule {}
