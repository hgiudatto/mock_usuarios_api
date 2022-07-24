/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength } from 'class-validator'/* eslint-disable prettier/prettier *//* eslint-disable prettier/prettier */
export class Nickname {

  @IsString()
  @MinLength(3)
  @MaxLength(15)  
  consumer_id: string;

  channel: string;
  ip_address: string;
  terminal: string;
  timestamp: string;
  origin: string;
  sub_code: string;
  client: {
    document_number: string;
    document_type: string;
    password: string;
    strong_key: boolean;
    card_number: string;
  };
}