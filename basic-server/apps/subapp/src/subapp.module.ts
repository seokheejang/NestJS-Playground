import { Module } from '@nestjs/common';
import { SubappController } from './subapp.controller';
import { SubappService } from './subapp.service';

@Module({
  imports: [],
  controllers: [SubappController],
  providers: [SubappService],
})
export class SubappModule {}
