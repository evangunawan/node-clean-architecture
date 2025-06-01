import { Book } from '../entity/book';

export interface BookRepository {
  getAll(query?: string, page?: number, limit?: number): Promise<Book[]>;
  getById(id: string): Promise<Book>;
}
