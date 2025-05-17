import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PayerDto } from '../dto/payer.dto';

export class CreateCardPaymentDto {
  @IsNumber()
  @IsPositive()
  transaction_amount: number;

  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  installments: number;

  @IsString()
  @IsNotEmpty()
  payment_method_id: string;

  @IsOptional()
  @IsNumber()
  issuer_id?: number;

  @ValidateNested()
  @Type(() => PayerDto)
  payer: PayerDto;
}
