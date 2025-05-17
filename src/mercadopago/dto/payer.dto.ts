import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdentificationDto } from './identification.dto';

export class PayerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => IdentificationDto)
  identification?: IdentificationDto;
}
