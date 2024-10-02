import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './test/example/example.controller';
import { MoongHeaderInterceptor } from '@/interceptors/moong-header.interceptor';
import { MoongAuthGuard } from '@/guards/moong-auth.guard';
import { MoongValidationPipe } from '@/pipes/moong-validation.pipe';

@Module({
  imports: [],
  controllers: [AppController, ExampleController],
  providers: [
    AppService,
    MoongHeaderInterceptor,
    MoongAuthGuard,
    MoongValidationPipe,
  ],
})
export class AppModule {}
