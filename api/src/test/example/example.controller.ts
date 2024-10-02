// src/controllers/example.controller.ts

import { Get, Post, Body } from '@nestjs/common';
import { MoongController } from '@/decorators/moong-controller.decorator';
import { MoongHeaderInterceptor } from '@/interceptors/moong-header.interceptor';
import { MoongAuthGuard } from '@/guards/moong-auth.guard';
import { MoongValidationPipe } from '@/pipes/moong-validation.pipe';

@MoongController('/test/example', {
  interceptors: [MoongHeaderInterceptor],
  guards: [MoongAuthGuard],
  pipes: [MoongValidationPipe],
})
export class ExampleController {
  @Get()
  getData() {
    return { message: 'Header added!' };
  }

  @Post()
  createData(@Body() data: any) {
    return { message: 'Data received', data };
  }
}
