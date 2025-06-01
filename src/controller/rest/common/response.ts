import { Response } from 'express';
import { CommonResponseDto } from '../../dto/common';

export class CommonResponse {
  public dto: CommonResponseDto | CommonResponseDto[] | Record<string, unknown>;
  private statusCode = 200;
  private readonly _httpHeaders: Record<string, string>;

  constructor(
    dto: CommonResponseDto | CommonResponseDto[] | Record<string, unknown>,
    options?: { headers?: Record<string, string> }
  ) {
    this.dto = dto;
    if (options?.headers && typeof options?.headers === 'object') {
      this._httpHeaders = { ...this._httpHeaders, ...options.headers };
    }
  }

  public status(statusCode: number): CommonResponse {
    this.statusCode = statusCode;
    return this;
  }

   public send(res: Response) {
    if (this._httpHeaders) {
      Object.keys(this._httpHeaders).forEach((key) => {
        res.set(key, this._httpHeaders[key]);
      });
    }

    const resp: Record<string, unknown> = { success: true };
    if (this.dto) {
      let data;
      if (Array.isArray(this.dto)) {
        data = this.dto.map(item =>
          item && typeof item.toJSON === 'function' ? item.toJSON() : item
        );
      } else {
        data =
          this.dto.toJSON && typeof this.dto.toJSON === 'function'
            ? this.dto.toJSON()
            : this.dto;
      }
      resp.data = data;
    }

    res.status(this.statusCode).send(resp);
  }
}
