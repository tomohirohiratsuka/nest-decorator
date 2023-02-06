import { Body, Controller, Get, Put, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import CreateRequest from 'src/CreateRequest.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put('/create')
  async create(
    @Body(new ValidationPipe({ transform: true })) body: CreateRequest,
  ) {
    return 'success';
  }

  @Put('/create-form-data')
  async createFormData(
    @Body(new ValidationPipe({ transform: true })) body: CreateRequest,
  ) {
    return 'success';
  }
}
