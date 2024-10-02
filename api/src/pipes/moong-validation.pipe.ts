// src/pipes/custom-validation.pipe.ts

import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class MoongValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // 검증 로직 구현
    if (!value || typeof value !== 'object') {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
