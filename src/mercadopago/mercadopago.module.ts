import { Module } from '@nestjs/common';
import { MercadopagoService } from './mercadopago.service';
import { MercadopagoController } from './mercadopago.controller';
import { PixPaymentUseCase } from './use-cases/pix-payment.use-case';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CardPaymentUseCase } from './use-cases/card-payment.use-case';

@Module({
  imports: [ConfigModule],
  controllers: [MercadopagoController],
  providers: [
    MercadopagoService,
    PixPaymentUseCase,
    CardPaymentUseCase,
    ConfigService,
  ],
})
export class MercadopagoModule {}
