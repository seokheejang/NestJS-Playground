import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './utils/winston.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Test example')
    .setDescription('Test API description')
    .setVersion('1.0')
    .addTag('collector')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useLogger(logger);

  await app.listen(3000);
}
bootstrap();
