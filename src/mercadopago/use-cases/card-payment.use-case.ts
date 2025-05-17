import { Payment, MercadoPagoConfig } from 'mercadopago';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { CreateCardPaymentDto } from '../dto/create-card-payment.dto';
import { Injectable } from '@nestjs/common';
import { CardPaymentResponse } from '../interfaces/cardPaymentResponse.interface';

@Injectable()
export class CardPaymentUseCase {
  private readonly payment: Payment;
  constructor(private readonly configService: ConfigService) {
    const accessToken = this.configService.get<string>('TOKEN_MERCADOPAGO');
    if (!accessToken) {
      throw new Error('Token de acesso não Encontrado');
    }
    const client = new MercadoPagoConfig({ accessToken });
    this.payment = new Payment(client);
  }

  async execute(
    paymentData: CreateCardPaymentDto,
  ): Promise<CardPaymentResponse> {
    try {
      if (!paymentData.payer?.email) {
        throw new Error('Email do pagador é obrigatório');
      }

      const response = await this.payment.create({
        body: {
          transaction_amount: paymentData.transaction_amount,
          token: paymentData.token,
          description: paymentData.description || 'Pagamento via cartão',
          installments: paymentData.installments || 1,
          payment_method_id: paymentData.payment_method_id,
          payer: {
            email: paymentData.payer.email,
            ...(paymentData.payer.identification && {
              identification: {
                type: paymentData.payer.identification.type,
                number: paymentData.payer.identification.number?.toString(),
              },
            }),
          },
        },
        requestOptions: { idempotencyKey: uuidv4() },
      });
      return {
        id: response.id?.toString() ?? '',
        status: response.status || 'pending',
        ...response,
      } as CardPaymentResponse;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Erro ao criar pagamento: ${error.message}`);
      }
      throw new Error('Erro desconhecido ao criar pagamento');
    }
  }
}
