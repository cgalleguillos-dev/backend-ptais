import { HttpException, Injectable, InternalServerErrorException, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    constructor(private readonly jwtService: JwtService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const auth = req.headers.authorization;
            if (!auth) throw new UnauthorizedException('Invalid token');

            if (!auth.startsWith('Bearer')) throw new UnauthorizedException('Invalid token');

            const token = auth.split(" ").length === 2 ? auth.split(" ")[1] : null;
            if (!token) throw new UnauthorizedException('Invalid token');

            const verifyToken = this.jwtService.verify(token);
            if (!verifyToken) throw new UnauthorizedException('Invalid token');
            next();
        } catch (error) {
            throw new HttpException(error.message, error.status || 500);
        }
    }

}