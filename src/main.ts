import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const host = 'localhost';
  console.log(`Server Running on : http://${host}:${port}/`);
  await app.listen(port, host);
}
bootstrap();
