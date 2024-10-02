// src/guards/custom-auth.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class MoongAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // 인증 로직 구현
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    // 예시: 토큰이 존재하면 통과
    return !!token;
  }
}
