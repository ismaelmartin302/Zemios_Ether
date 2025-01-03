import { UserActiveInterface } from './../common/interfaces/user-active.interface';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';
import { RequestWithUser } from './interfaces/request-with-user.interface';
import { NeedRole } from './decorators/need-role.decorator';
import { RoleGuard } from './guards/role.guard';
import { Role } from '../common/enums/role.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        console.log(registerDto)
        return this.authService.register(registerDto)
    }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }

    @Get('profile')
    @Auth(Role.USER)
    profile(@ActiveUser() user: UserActiveInterface) {
        return this.authService.profile(user);
    }
}
