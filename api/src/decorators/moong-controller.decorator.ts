// src/decorators/custom-controller.decorator.ts

import {
  Controller,
  UseInterceptors,
  UseGuards,
  UsePipes,
  Type,
  NestInterceptor,
  CanActivate,
  PipeTransform,
} from '@nestjs/common';

export function MoongController(
  prefix?: string,
  options?: {
    interceptors?: Type<NestInterceptor>[];
    guards?: Type<CanActivate>[];
    pipes?: Type<PipeTransform>[];
  },
): ClassDecorator {
  return function (target: any) {
    if (prefix) {
      Controller(prefix)(target);
    } else {
      Controller()(target);
    }

    if (options?.interceptors) {
      UseInterceptors(...options.interceptors)(target);
    }

    if (options?.guards) {
      UseGuards(...options.guards)(target);
    }

    if (options?.pipes) {
      UsePipes(...options.pipes)(target);
    }
  };
}
