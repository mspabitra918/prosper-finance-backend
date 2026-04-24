import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BankVerification } from './entities/bank-verification.entity';
import { BankVerificationService } from './bank-verification.service';
import { BankVerificationController } from './bank-verification.controller';

@Module({
  imports: [SequelizeModule.forFeature([BankVerification])],
  providers: [BankVerificationService],
  controllers: [BankVerificationController],
  exports: [BankVerificationService, SequelizeModule],
})
export class BankVerificationModule {}
