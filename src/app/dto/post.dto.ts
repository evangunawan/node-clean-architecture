export class PostRequestDto {
  private _id: string;
  private _type: string;
  private _name: string;

  constructor(id: string, type: string, name: string) {
    this._id = id;
    this._type = type;
    this._name = name;
  }
}

export class PostResponseDto {}
