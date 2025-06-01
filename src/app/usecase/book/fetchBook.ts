import { inject, injectable } from 'tsyringe';
import { BookRepository } from '../../repository/book';
import { FetchBookRequestDto, FetchBookResponseDto } from '../../../controller/dto/book';
import { MockBookRepository } from '../../../infrastructure/repository/book/mock';

@injectable()
export class FetchBookUsecase {
  constructor(@inject(MockBookRepository) private bookRepository: BookRepository) {}

  public async execute(dto: FetchBookRequestDto): Promise<FetchBookResponseDto[]>{ 
    const books = await this.bookRepository.getAll(
      dto.q,
      dto.page,
      dto.limit
    );

    // data processing, database fetching, businses logic goes here.
    
    // return the DTO.
    return books.map((book) => new FetchBookResponseDto(book));
  }
}
