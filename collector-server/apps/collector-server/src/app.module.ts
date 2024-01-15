import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ethersv5Module } from '@app/ethersv5';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`,
    }),
    Ethersv5Module,
    MongodbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
