import 'reflect-metadata';
import dotenv from 'dotenv';
import { createExpressServer } from './controller/rest/server';

dotenv.config();

// init express server
const bootstrap = () => {
  // start express server
  createExpressServer({ port: process.env.PORT });
};

bootstrap();
