import { ValidationResult } from 'joi';

export interface CommonRequestDto {
  validate(): ValidationResult;
}

export interface CommonResponseDto {
  httpHeaders?: Record<string, string>;
  toJSON(): Record<string, unknown>;
}
