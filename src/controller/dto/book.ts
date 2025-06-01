import Joi, { ValidationResult } from 'joi';
import { CommonRequestDto } from './common';

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

export class FetchBookResponseDto {
  public id: string;
  public title: string;
  public authorId?: string;
  public publishedYear?: number;
  public genre?: string;
  public publisher?: string;
  public pageCount?: number;

  constructor(data: Partial<FetchBookResponseDto>) {
    Object.assign(this, data);
  }
}
