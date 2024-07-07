import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

import postRoute from './controller/http/post/post.route';

class AppServer {
  private static _serverInstance: AppServer;
  private _express: express.Application | undefined;

  constructor() {}

  public static getInstance() {
    return this._serverInstance || (this._serverInstance = new this());
  }

  private initHttpRoutes() {
    // todo: this route initialization can be refactored to support a large number of routes.
    if (this._express) {
      this._express.use(postRoute());
    }
  }

  public initializeServer(): AppServer {
    if (this._express !== undefined) {
      throw new Error('App already initialized.');
    }

    // create express server application
    this._express = express();
    const port = process.env.PORT || 3000;

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
    this._express.listen(port, () => {
      return console.log(`Server is listening on port ${port}...`);
    });
    return this;
  }
}

export const Server = AppServer.getInstance();
