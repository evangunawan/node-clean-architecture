import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { WinstonLogger } from '../../infrastructure/logger/winston';

const logger = container.resolve(WinstonLogger);
const l = logger.logger;

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    l.info({
      timestamp: new Date().toISOString(),
      status: res.statusCode,
      method: req.method,
      path: req.originalUrl,
      responseTime: `${duration}ms`,
    });
  });

  next();
};
