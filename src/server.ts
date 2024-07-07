import express from 'express';
import postRoute from './controller/http/post/post.route';
import bodyParser from 'body-parser';

class AppServer {
  private static _serverInstance: AppServer;
  private _express: express.Application | undefined;

  constructor() {}

  public static getInstance() {
    return this._serverInstance || (this._serverInstance = new this());
  }

  private initHttpRoutes() {
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
    this._express.use(bodyParser.json());
    this._express.use(bodyParser.urlencoded({ extended: false }));

    // init routes
    this.initHttpRoutes();

    // start server and listen requests 🔥
    this._express.listen(port, () => {
      return console.log(`Server listening on port ${port}`);
    });
    return this;
  }
}

export const Server = AppServer.getInstance();
