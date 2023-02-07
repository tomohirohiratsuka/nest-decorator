import {
  Body,
  Controller,
  Get,
  Put,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import CreateRequest from 'src/CreateRequest.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @UseInterceptors(FileInterceptor('file'))
  async createFormData(
    @Body(
      new ValidationPipe({
        transform: true,
        forbidUnknownValues: false,
        forbidNonWhitelisted: false,
      }),
    )
    body: CreateRequest,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return 'success';
  }
}
