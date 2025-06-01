import { inject, injectable } from 'tsyringe';
import { CommonHandler } from '../common/handler';
import { NextFunction, Request, Response, Router } from 'express';
import {
  FetchBookRequestDto,
  FetchBookByIdDto,
  FetchBookResponseDto,
} from '../../dto/book';
import { FetchBookUsecase } from '../../../app/usecase/book/fetchBook';
import { CommonResponse } from '../common/response';
import { FetchBookByIdUsecase } from '../../../app/usecase/book/fetchBookById';

@injectable()
export class BookHandler extends CommonHandler {
  constructor(
    @inject(FetchBookUsecase) private fetchBookUsecase: FetchBookUsecase,
    @inject(FetchBookByIdUsecase)
    private fetchBookByIdUsecase: FetchBookByIdUsecase,
  ) {
    super();
  }

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
      const { error } = dto.validate();

      if (error) {
        return next(error);
      }

      const result = await this.fetchBookUsecase.execute(dto);
      return new CommonResponse(result).status(200).send(res);
    } catch (e) {
      next(e);
    }
  }

  private async fetchBookById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const dto = new FetchBookByIdDto(req.params);
      const { error } = dto.validate();

      if (error) {
        return next(error);
      }

      const book = await this.fetchBookByIdUsecase.execute(dto.bookId);
      const result = new FetchBookResponseDto(book);
      return new CommonResponse(result).status(200).send(res);
    } catch (e) {
      next(e);
    }
  }
}
