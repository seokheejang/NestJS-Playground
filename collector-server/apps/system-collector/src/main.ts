import { NestFactory } from '@nestjs/core';
import { SystemCollectorModule } from './system-collector.module';

async function bootstrap() {
  const app = await NestFactory.create(SystemCollectorModule);
  await app.listen(3001);
}
bootstrap();
