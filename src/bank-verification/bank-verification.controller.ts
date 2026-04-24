import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { BankVerificationDto } from './dto/create-bank-verification.dto';
import { BankVerificationService } from './bank-verification.service';

const BACKEND_PUCLIC_URL = '/api/v1/bank-verification';

@Controller(BACKEND_PUCLIC_URL)
export class BankVerificationController {
  constructor(
    private readonly bankVerificationService: BankVerificationService,
  ) {}

  // Public endpoint — anyone can apply (guest or logged in)
  @Post('send')
  async apply(@Body() dto: BankVerificationDto) {
    try {
      const message = await this.bankVerificationService.create(dto);
      return {
        message: 'Bank verification sent successfully',
        data: message,
      };
    } catch (error) {
      console.error('Error applying for bank verification:', error);
      throw new InternalServerErrorException(
        'Error submitting bank verification application',
      );
    }
  }
}
