import { IsString, IsIn, Length, IsNotEmpty } from 'class-validator';

export class IdentificationDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['CPF', 'CNPJ', 'RG', 'PASSAPORTE'])
  type: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 14)
  number: string;
}
