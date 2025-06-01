import { Book } from "../../../app/entity/book";
import { BookRepository } from "../../../app/repository/book";

export class MockBookRepository implements BookRepository {
  private books: Book[] = [
    {
      id: "1",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: { id: "author-1", name: "Douglas Adams" },
      publishedYear: 1979,
      genre: "Science Fiction",
      publisher: "Pan Books",
      pageCount: 224,
    },
    {
      id: "2",
      title: "The Restaurant at the End of the Universe",
      author: { id: "author-1", name: "Douglas Adams" },
      publishedYear: 1980,
      genre: "Science Fiction",
      publisher: "Pan Books",
      pageCount: 256,
    },
    {
      id: "3",
      title: "The Lord of the Rings",
      author: { id: "author-2", name: "J.R.R. Tolkien" },
      publishedYear: 1954,
      genre: "Fantasy",
      publisher: "George Allen & Unwin",
      pageCount: 1178,
    },
  ];

  async getAll(query?: string, page: number = 1, limit: number = 10): Promise<Book[]> {
    let filteredBooks = this.books;
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filteredBooks = this.books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerCaseQuery) ||
          book.author?.name.toLowerCase().includes(lowerCaseQuery) ||
          book.genre?.toLowerCase().includes(lowerCaseQuery)
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return filteredBooks.slice(startIndex, endIndex);
  }

  async getById(id: string): Promise<Book> {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    return book;
  }
}
