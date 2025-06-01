import { inject, injectable } from 'tsyringe';
import { BookRepository } from '../../repository/book';
import { Book } from '../../entity/book';
import { MockBookRepository } from '../../../infrastructure/repository/book/mock';

@injectable()
export class FetchBookByIdUsecase {
  constructor(
    @inject(MockBookRepository) private bookRepository: BookRepository
  ) {}

  async execute(id: string): Promise<Book> {
    return this.bookRepository.getById(id);
  }
}
