export class HttpResponseDto {
  private readonly _status: number;
  private readonly _data: any;
  private readonly _message?: string;
  private readonly _error?: string;

  constructor(payload: {
    status?: number;
    data: any;
    message?: string;
    error?: string;
  }) {
    this._status = payload.status || 200;
    this._data = payload.data;
    this._message = payload.message;
    this._error = payload.error;
  }

  public toJSON() {
    return {
      status: this._status,
      data: this._data,
      message: this._message,
      error: this._error,
    };
  }
}