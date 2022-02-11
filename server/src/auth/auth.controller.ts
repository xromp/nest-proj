import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from './auth.decorator';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('me')
  getProtected(@Request() req) {
    return req.user;
  }

  @Public()
  @Get('public')
  getPublic(@Request() req) {
    return 'public!';
  }
}
