import { Author } from './author';

export class Book {
  public id: string;
  public title: string;
  public author?: Author;
  public publishedYear?: number;
  public genre?: string;
  public publisher?: string;
  public pageCount?: number;

  constructor(props: {
    title: string;
    author?: Author;
    isbn?: string;
    publishedYear?: number;
    genre?: string;
    publisher?: string;
    pageCount?: number;
  }) {
    Object.assign(this, props);
  }
}
