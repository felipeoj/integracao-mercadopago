export interface CardPaymentResponse {
  id: string;
  status: string;
  status_detail?: string;
  transaction_amount?: number;
  installments?: number;
  payer?: {
    email: string;
    identification?: {
      type: string;
      number: string;
    };
  };
}
