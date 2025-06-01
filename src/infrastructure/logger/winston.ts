import { singleton } from 'tsyringe';
import * as winston from 'winston';

@singleton()
export class WinstonLogger {
  private _logger?: winston.Logger;

  constructor() {
    if (!this._logger) {
      this.createLogger();
    }
  }

  public get logger(): winston.Logger {
    return this._logger;
  }

  info(message: Record<string, unknown>) {
    this.logger.info(message);
  }

  error(message: Record<string, unknown>) {
    this.logger.error(message);
  }

  warn(message: Record<string, unknown>) {
    this.logger.warn(message);
  }

  debug(message: Record<string, unknown>) {
    this.logger.debug(message);
  }

  private createLogger() {
    this._logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(winston.format.json()),
      transports: [new winston.transports.Console()],
    });
  }
}
