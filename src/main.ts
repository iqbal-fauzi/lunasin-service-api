import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { AppModule } from './app.module';
import 'dotenv/config';

let cachedApp: INestApplication;

export default async function (req, res) {
  if (!cachedApp) {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

    app.setGlobalPrefix('api');

    await app.init();
    cachedApp = app;
  }

  const server = cachedApp.getHttpAdapter().getInstance();
  server(req, res);
}
