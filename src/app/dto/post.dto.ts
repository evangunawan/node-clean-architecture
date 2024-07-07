import { Post } from '../entity/post.entity';

export class PostResultDto {
  private readonly _id: string;
  private readonly _type: string;
  private readonly _content: string;

  constructor(entity: Post) {
    this._id = entity.id;
    this._type = entity.type;
    this._content = entity.content;
  }

  public toJSON() {
    return {
      id: this._id,
      type: this._type,
      content: this._content,
    };
  }
}

export class PostCreateDto {
  private readonly _type: string;
  private readonly _content: string;

  constructor(type: string, content: string) {
    this._type = type;
    this._content = content;
  }

  get content(): string {
    return this._content;
  }

  get type(): string {
    return this._type;
  }
}
