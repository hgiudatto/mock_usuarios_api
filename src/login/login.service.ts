/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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

  // TODO: Setear response header: Content-Type - Resp Status 
  postNicknameCanalP(channel: string): Nickname {
    // TODO: Reemplazar por RespNicknameChannelP y validar channel si es P retornar un body resp y si es O otro. 
    return this.nickname;
  }
}
