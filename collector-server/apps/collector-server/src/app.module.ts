import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ethersv5Module } from '@app/ethersv5';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`,
    }),
    Ethersv5Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
