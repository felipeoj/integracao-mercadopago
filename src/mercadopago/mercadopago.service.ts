import { Injectable, Logger } from '@nestjs/common';
import { PixPaymentUseCase } from './use-cases/pix-payment.use-case';
import { CreatePixPaymentDto } from './dto/create-pix-payment.dto';
import { PixPaymentResponse } from './interfaces/pixPaymentResponse.interface';
import { CardPaymentUseCase } from './use-cases/card-payment.use-case';
import { CardPaymentResponse } from './interfaces/cardPaymentResponse.interface';
import { CreateCardPaymentDto } from './dto/create-card-payment.dto';
@Injectable()
export class MercadopagoService {
  private readonly logger = new Logger(MercadopagoService.name);
  constructor(
    private readonly pixPaymentUseCase: PixPaymentUseCase,
    private readonly cardPaymentUseCase: CardPaymentUseCase,
  ) {}

  async createPixPayment(
    paymentData: CreatePixPaymentDto,
  ): Promise<PixPaymentResponse> {
    this.logger.log(`Pix criado para ${paymentData.email}`);
    try {
      const response = await this.pixPaymentUseCase.execute(paymentData);
      this.logger.log(`Pix Criado - ID: ${response.id}`);
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`Erro ao criar Pix: ${error.message}`, error.stack);
      } else {
        this.logger.error(`Erro ao criar Pix: ${JSON.stringify(error)}`);
      }
      throw error;
    }
  }

  async createCardPayment(
    paymentData: CreateCardPaymentDto,
  ): Promise<CardPaymentResponse> {
    this.logger.log(
      `Pagamento por cartão criado para ${paymentData.payer.email}`,
    );
    try {
      const response = await this.cardPaymentUseCase.execute(paymentData);
      this.logger.log(`Pagamento por cartão criado - ID: ${response.id}`);
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Erro ao criar Pagamento por cartão: ${error.message}`,
          error.stack,
        );
      } else {
        this.logger.error(
          `Erro ao criar Pagamento por cartão: ${JSON.stringify(error)}`,
        );
      }
      throw error;
    }
  }
}
