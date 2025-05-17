import { PaymentStatus } from './payment-types';

export interface PixPaymentResponse {
  id: string;
  status: PaymentStatus;
  status_detail?: string;
  point_of_interaction?: {
    transaction_data?: {
      qr_code?: string;
      qr_code_base64?: string;
      ticket_url?: string;
    };
  };
}
