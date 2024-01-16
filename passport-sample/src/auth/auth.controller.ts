import { Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Post, UseGuards, Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
