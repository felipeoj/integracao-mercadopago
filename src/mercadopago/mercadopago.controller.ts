import { Controller, Post, Body } from '@nestjs/common';
import { MercadopagoService } from './mercadopago.service';
import { CreatePixPaymentDto } from './dto/create-pix-payment.dto';
import { CreateCardPaymentDto } from './dto/create-card-payment.dto';

@Controller('mercadopago')
export class MercadopagoController {
  constructor(private readonly mercadopagoService: MercadopagoService) {}

  @Post('pix')
  async createPixPayment(@Body() createPixPaymentDto: CreatePixPaymentDto) {
    return this.mercadopagoService.createPixPayment(createPixPaymentDto);
  }

  @Post('card')
  async createCardPayment(@Body() createCardPaymentDto: CreateCardPaymentDto) {
    return this.mercadopagoService.createCardPayment(createCardPaymentDto);
  }
}
