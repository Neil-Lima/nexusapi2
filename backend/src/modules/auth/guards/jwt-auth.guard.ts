/* eslint-disable prettier/prettier */
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    console.log('JWT Guard - User:', user);
    if (err || !user) {
      console.log('JWT Auth Error:', err);
      console.log('Info:', info);
    }
    return user;
  }
}
