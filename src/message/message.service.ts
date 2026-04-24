import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './entities/message.entity';
import { MessagenDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message)
    private readonly messageModel: typeof Message,
  ) {}
  async create(dto: MessagenDto) {
    try {
      const message = await this.messageModel.create({
        full_name: dto.full_name,
        email: dto.email,
        phone: dto.phone,
        subject: dto.subject,
        message: dto.message,
      } as any);

      return message;
    } catch (error) {
      console.error('Error creating loan application:', error);
      throw error;
    }
  }
}
