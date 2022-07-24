/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { Nickname } from './interfaces/Nickname';
import { RespNicknameChannelP } from './interfaces/RespNicknameChannelP';

@Injectable()
export class LoginService {
  nickname: Nickname = {
    consumer_id: '12345',
    channel: 'P',
    ip_address: '10.10.123',
    terminal: '1',
    timestamp: '20220601:00:17:00',
    origin: 'A',
    sub_code: 'A1',
    client: {
      document_number: '23456789',
      document_type: 'DNI',
      password: 's3cr3t0',
      strong_key: false,
      card_number: '999008336761',
    },
  };

  nicknamechannelL: Nickname = {
    consumer_id: '67890',
    channel: 'L',
    ip_address: '10.10.123',
    terminal: '1',
    timestamp: '20220609:12:15:00',
    origin: 'A',
    sub_code: 'A1',
    client: {
      document_number: '23456789',
      document_type: 'DNI',
      password: 's3cr3t0',
      strong_key: false,
      card_number: '4980083009274',
    },
  };

  postNicknameCanalP(@Body() body: Nickname): Nickname {
    if (body.channel.toString() === 'P') {
      return this.nickname;
    } else if (body.channel.toString() === 'L') {
      return this.nicknamechannelL;
    }
  }

  postNicknameCanalL(): Nickname {
    return this.nickname;
  }
}
