import { inject, injectable } from 'tsyringe';
import { BookRepository } from '../../repository/book';
import { FetchBookRequestDto } from '../../../controller/dto/book';

@injectable()
export class FetchBookUsecase {
  constructor(@inject(null) private bookRepository: BookRepository) {}

  public execute(dto: FetchBookRequestDto){ 

  }

}
