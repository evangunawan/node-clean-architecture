import { ValidationResult } from 'joi';

export interface CommonRequestDto {
  validate(): ValidationResult;
}

export interface CommonResponseDto {
  /**
   * toJSON() is a JSON object that is ready to be returned in the HTTP response body.
   * With this, response Content-Type will be `application/json`.
   */
  toJSON(): Record<string, unknown>;
}
