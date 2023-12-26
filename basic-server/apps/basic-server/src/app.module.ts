import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { EthersModule } from '@app/ethers';

@Module({
  imports: [AdminModule, EthersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
