import { NestFactory } from '@nestjs/core';
import { SubappModule } from './subapp.module';

async function bootstrap() {
  const app = await NestFactory.create(SubappModule);
  await app.listen(3001);
}
bootstrap();
