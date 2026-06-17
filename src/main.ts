import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //PONE UN PREFIJO ANTES DE API
  app.setGlobalPrefix('api/v2');
  //VALIDACIONES DE MANERA GLOBAL
  app.useGlobalPipes(
    new ValidationPipe({
      //PARA QUE SI MANDAS MAS VALORES EN EL BODY SALGA ERROR
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        exposeUnsetFields: false,
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
