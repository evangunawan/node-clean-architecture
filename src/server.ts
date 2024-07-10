import express from 'express';
import * as http from 'node:http';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

import postRoute from './controller/http/post/post.route';

class AppServer {
  private static _serverInstance: AppServer;
  private _express: express.Application | undefined;
  private _server: http.Server | undefined;
  private _port: string;

  constructor() {}

  public static getInstance() {
    return this._serverInstance || (this._serverInstance = new this());
  }

  public get server(): http.Server | null {
    return this._server || null;
  }

  public get port(): string {
    return this._port;
  }

  public initializeServer(ready?: (app: AppServer) => void): AppServer {
    if (this._express !== undefined) {
      throw new Error('App already initialized.');
    }

    // create express server application
    this._express = express();
    this._port = process.env.PORT || '3000';

    // init middlewares and express components
    this._express.use(helmet());
    this._express.use(bodyParser.json());
    this._express.use(bodyParser.urlencoded({ extended: false }));

    if (
      process.env.NODE_ENV !== 'production' ||
      process.env.NODE_LOGGER === 'true'
    ) {
      const morganFmt =
        ':date[iso] | :remote-addr | ":method :url" :status :response-time ms';
      this._express.use(morgan(morganFmt));
    }

    // init routes
    this.initHttpRoutes();

    // start server and listen requests 🔥
    this._server = this._express.listen(this._port, () => {
      if (ready) ready(this);
      return console.log(`Server is listening on port ${this._port}...`);
    });

    process.on('SIGTERM', () => this.shutDown());
    process.on('SIGINT', () => this.shutDown());

    return this;
  }

  private initHttpRoutes() {
    // todo: this route initialization can be refactored to support a large number of routes.
    if (this._express) {
      this._express.use(postRoute());
    }
  }

  private shutDown() {
    this._server.close(() => {
      console.log('Closing out connections and stopping server...');
    });

    setTimeout(() => {
      console.error(
        'Could not close connections in time, forcefully shutting down...',
      );
      process.exit(1);
    }, 10000);
  }
}

export const Server = AppServer.getInstance();
