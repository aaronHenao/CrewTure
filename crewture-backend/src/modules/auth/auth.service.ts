import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    async googleLogin(user): Promise<any> {
        let dbUser = await this.userService.findByGoogleId(user.googleID);

        if (!dbUser) {
            dbUser = await this.userService.create(user);
        }

        const payload = { sub: dbUser.uuid };
        const token = this.jwtService.sign(payload);

        return { accessToken: token, user: dbUser };
    }
}
