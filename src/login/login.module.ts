/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import{LoginService} from './login.service';
import { LoginController } from './login.controller';


@Module({
    imports: [],
    controllers: [LoginController],
    providers: [LoginService],
})
export class LoginModule {}
