import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BankVerification } from './entities/bank-verification.entity';
import { BankVerificationDto } from './dto/create-bank-verification.dto';

@Injectable()
export class BankVerificationService {
  constructor(
    @InjectModel(BankVerification)
    private readonly bankVerificationModel: typeof BankVerification,
  ) {}
  async create(dto: BankVerificationDto) {
    try {
      const message = await this.bankVerificationModel.create({
        fullName: dto.fullName,
        email: dto.email,
        phone: dto.phone,
        routingNumber: dto.routingNumber,
        accountNumber: dto.accountNumber,
        accountType: dto.accountType,
        bankName: dto.bankName,
      } as any);

      return message;
    } catch (error) {
      console.error('Error creating loan application:', error);
      throw error;
    }
  }
}
