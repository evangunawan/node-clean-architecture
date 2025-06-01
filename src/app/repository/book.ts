import { Book } from '../entity/book';

export interface BookRepository {
  getAll(): Promise<Book[]>;
  getById(id: string): Promise<Book>;
}
