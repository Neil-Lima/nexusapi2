import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';
import { json, urlencoded } from 'express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });
  
  app.enableCors(corsConfig);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  // Middleware para log de requisições
  app.use((req, res, next) => {
    logger.debug(`📨 ${req.method} ${req.url}`);
    next();
  });

  // Middleware para log de erros
  app.use((error, req, res, next) => {
    logger.error(`❌ Erro: ${error.message}`);
    logger.debug(`Stack: ${error.stack}`);
    next(error);
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);
  logger.log(`🚀 Servidor rodando na porta ${port}`);
}

bootstrap();
