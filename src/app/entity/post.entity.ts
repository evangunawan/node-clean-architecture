export class Pet {
  private _id: string;
  private _type: string;
  private _name: string;

  constructor(id: string, type: string, name: string) {
    this._id = id;
    this._type = type;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
