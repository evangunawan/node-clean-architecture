export class Post {
  private _id?: string;
  private _type: string;
  private _content: string;

  constructor(type: string, content: string) {
    this._type = type;
    this._content = content;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
