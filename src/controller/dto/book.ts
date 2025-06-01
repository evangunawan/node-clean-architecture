import Joi, { ValidationResult } from 'joi';
import { CommonRequestDto, CommonResponseDto } from './common';
import { Book } from '../../app/entity/book';

export class CreateBookRequestDto implements CommonRequestDto {
  public title: string;
  public authorId?: string;
  public isbn?: string;
  public publishedYear?: number;
  public genre?: string;
  public publisher?: string;
  public pageCount?: number;

  constructor(data: Partial<CreateBookRequestDto>) {
    Object.assign(this, data);
  }

  validate(): ValidationResult {
    const schema = Joi.object({
      title: Joi.string().required(),
      authorId: Joi.string().optional(),
      isbn: Joi.string().optional(),
      publishedYear: Joi.number().optional(),
      genre: Joi.string().optional(),
      publisher: Joi.string().optional(),
      pageCount: Joi.number().optional(),
    });

    return schema.validate(this);
  }
}

export class FetchBookRequestDto implements CommonRequestDto {
  public q?: string;
  public limit?: number;
  public page?: number;

  constructor(data: Partial<FetchBookRequestDto>) {
    Object.assign(this, data);
  }

  validate(): ValidationResult {
    const schema = Joi.object({
      q: Joi.string().optional(),
      limit: Joi.number().integer().min(1).max(100).optional(),
      page: Joi.number().integer().min(1).optional(),
    });

    return schema.validate(this);
  }
}

export class FetchBookByIdDto implements CommonRequestDto {
  public bookId: string;

  constructor(data: Partial<FetchBookByIdDto>) {
    Object.assign(this, data);
  }

  validate(): ValidationResult {
    const schema = Joi.object({
      bookId: Joi.string().required(),
    });

    return schema.validate(this);
  }
}

export class FetchBookResponseDto implements CommonResponseDto {
  public id: string;
  public title: string;
  public authorId?: string;
  public publishedYear?: number;
  public genre?: string;
  public publisher?: string;
  public pageCount?: number;

  constructor(data: Book) {
    this.id = data.id;
    this.title = data.title;
    this.authorId = data.author?.id;
    this.publishedYear = data.publishedYear;
    this.genre = data.genre;
    this.publisher = data.publisher;
    this.pageCount = data.pageCount;
  }

  public toJSON(): Record<string, unknown> {
    return {
      id: this.id,
      title: this.title,
      authorId: this.authorId,
      publishedYear: this.publishedYear,
      genre: this.genre,
      publisher: this.publisher,
      pageCount: this.pageCount,
    };
  }
}
