import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(ConfigService) configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('common.jwtSecret'),
    });
  }

  async validate(payload: any) {
    return {
      id: payload?.id,
      roles: payload?.roles,
      username: payload?.username,
      email: payload?.email,
      isActive: payload?.isActive,
    };
  }
}
