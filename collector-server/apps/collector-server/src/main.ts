import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './utils/winston.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.useLogger(logger);
}
bootstrap();
