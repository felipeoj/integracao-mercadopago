import { Payment, MercadoPagoConfig } from 'mercadopago';
import { ConfigService } from '@nestjs/config';
import { CreatePixPaymentDto } from '../dto/create-pix-payment.dto';
import { v4 as uuidv4 } from 'uuid';
import { PixPaymentResponse } from '../interfaces/pixPaymentResponse.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PixPaymentUseCase {
  private readonly payment: Payment;
  constructor(private readonly configService: ConfigService) {
    const accessToken = this.configService.get<string>('TOKEN_MERCADOPAGO');
    if (!accessToken) {
      throw new Error('Token de acesso não encontrado');
    }
    const client = new MercadoPagoConfig({ accessToken });
    this.payment = new Payment(client);
  }

  async execute(paymentData: CreatePixPaymentDto): Promise<PixPaymentResponse> {
    try {
      const response = await this.payment.create({
        body: {
          transaction_amount: paymentData.transaction_amount,
          description: paymentData.description || 'Pagamento via Pix',
          payment_method_id: 'pix',
          payer: {
            email: paymentData.email,
            identification: {
              type: paymentData.identification.type,
              number: paymentData.identification.number.toString(),
            },
          },
        },
        requestOptions: { idempotencyKey: uuidv4() },
      });

      return {
        ...response,
        id: response.id?.toString() ?? '',
      } as PixPaymentResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Erro ao criar pagamento: ${error.message}`);
      }
    }
    throw new Error('Erro desconhecido ao criar pagamento');
  }
}
