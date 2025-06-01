import { injectable } from 'tsyringe';
import { CommonHandler } from '../common/handler';
import { NextFunction, Request, Response, Router } from 'express';
import { FetchBookRequestDto } from '../../dto/book';

@injectable()
export class BookHandler extends CommonHandler {
  public routes(router: Router): Router {
    const bookRoutes = Router();

    // Define required routes/endpoints
    bookRoutes.get('/', this.fetchBooksHandler.bind(this));
    bookRoutes.get('/:bookId', this.fetchBookById.bind(this));

    // Define root path for the handler.
    router.use('/books', bookRoutes);
    return router;
  }

  private async fetchBooksHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const dto = new FetchBookRequestDto({
        ...req.query,
      });
    } catch (e) {
      next(e);
    }
  }

  private async fetchBookById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {}
}
