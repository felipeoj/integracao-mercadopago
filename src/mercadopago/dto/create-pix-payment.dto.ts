import {
  IsEmail,
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdentificationDto } from '../dto/identification.dto';

export class CreatePixPaymentDto {
  @IsNumber()
  @IsPositive()
  transaction_amount: number;

  @IsString()
  token?: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  payment_method_id: string;

  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => IdentificationDto)
  identification: IdentificationDto;
}
