/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { PostNicknameDto } from './dto/post-nickname.dto';
import { Request, Response } from 'express';
import {Nickname} from './interfaces/Nickname'
import {LoginService} from './login.service'

@Controller('login')
export class LoginController {

  constructor(private loginService: LoginService) {}

  @Post('/nicknameCanalP')
  loginNicknameCanalP(@Body() body: Nickname) {
    return {
      message: 'Post NickName Canal P',
      data: {...body},
    }

    // return this.loginService.postNicknameCanalP()
  }

  @Post('/canalLInterconexion')
  loginCanalLInterconexion(@Req() req, @Res() res) {
    return res.send('Hello World');
  }
}
