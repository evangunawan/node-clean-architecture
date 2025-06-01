import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import { container } from 'tsyringe';
import { BookHandler } from './handler/book';

interface AppConfig {
  port?: string;
}

export async function createExpressServer(
  config: AppConfig = {},
): Promise<void> {
  const app = express();
  app.use(bodyParser.json());

  const appRouter = express.Router();

  app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
  });

  // initialize handler classes
  const bookHandler = container.resolve(BookHandler);

  app.use('/api/v1', bookHandler.routes(appRouter));

  // swagger
  // app.use('/docs/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use((req: Request, res: Response) => {
    return res.status(404).send('404 Not Found');
  });

  // app.use(useErrorHandler());

  // Start server
  const PORT = config.port || 3000;
  app.listen(PORT, () => {
    console.log(
      `🚀 Server is running on http://localhost:${PORT} ` +
        `(env: ${process.env.NODE_ENV || 'development'})`,
    );
  });
}
