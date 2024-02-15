import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateHelloDto } from './dto';
import { Hello } from './entity';

@ApiBearerAuth()
@ApiTags('test-collector')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post()
  @ApiOperation({ summary: 'Create Hello' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createHello(@Body() createHelloDto: CreateHelloDto): Promise<string> {
    return this.appService.createHello(createHelloDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Hello,
  })
  async findOne(@Param('id') id: string): Promise<string> {
    console.log('findOne id', id);
    return this.appService.findOne();
  }
}
