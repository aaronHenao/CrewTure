import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/modules/users/entities/user.entity";
import { UsersService } from "src/modules/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){

    constructor(
        private configService: ConfigService,
        private readonly userService: UsersService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow('JWT_SECRET')
        });
    }

    async validate(payload: any): Promise<User>{

        const userUuid = payload.sub;
        const user = await this.userService.findByUuid(userUuid)
        
        if(!user){
            throw new UnauthorizedException('Credenciales inválidas')
        }

        return user;
    }
}