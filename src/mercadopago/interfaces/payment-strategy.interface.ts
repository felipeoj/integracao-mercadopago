import { CreateCardPaymentDto } from '../dto/create-card-payment.dto';
import { CreatePixPaymentDto } from '../dto/create-pix-payment.dto';

export interface PaymentStrategy {
  processPayment(data: {
    transaction_amount: number;
    processPayment(
      data: CreateCardPaymentDto | CreatePixPaymentDto,
    ): Promise<PaymentResponse>;
    email: string;
    currency: string;
    token: string;
    description: string;
    payment_method_id: string;
    installments: number;
    issuer_id?: number;
    identification?: {
      type: string;
      number: string;
    };
  }): Promise<PaymentResponse>;
}
