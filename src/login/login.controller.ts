/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { PostNicknameDto } from './dto/post-nickname.dto';
import { Request, Response } from 'express';
import { Nickname } from './interfaces/Nickname';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/nicknameCanalP')
  loginNicknameCanalP(@Body() body: Nickname, @Req() req, @Res() res) {
    /* return {
      message: 'Post NickName Canal P',
      data: {...body},
    } */
    return this.loginService.postNicknameCanalP(body);
  }

  @Post('/nicknameCanalL')
  loginNicknameCanalLNoValidate() {
    return this.loginService.postNicknameCanalL();
  }

  @Post('/canalLInterconexion')
  loginCanalLInterconexion(@Req() req, @Res() res) {
    return res.send('Hello World');
  }
}
