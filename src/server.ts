import express from 'express';
import postRoute from './controller/http/post/post.route';

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

    const app = express();
    this._express = app;
    const port = process.env.PORT || 3000;

    this.initHttpRoutes();

    app.listen(port, () => {
      return console.log(`Server listening on port ${port}`);
    });
    return this;
  }
}

export const Server = AppServer.getInstance();
