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
