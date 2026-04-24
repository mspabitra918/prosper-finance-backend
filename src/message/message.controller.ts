import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { MessagenDto } from './dto/create-message.dto';

const BACKEND_PUCLIC_URL = '/api/v1/message';

@Controller(BACKEND_PUCLIC_URL)
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  // Public endpoint — anyone can apply (guest or logged in)
  @Post('send')
  async apply(@Body() dto: MessagenDto) {
    try {
      const message = await this.messageService.create(dto);
      return {
        message: 'Message sent successfully',
        data: message,
      };
    } catch (error) {
      console.error('Error applying for loan:', error);
      throw new InternalServerErrorException(
        'Error submitting loan application',
      );
    }
  }
}
