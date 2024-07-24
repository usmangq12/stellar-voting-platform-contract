import { Controller, Get } from '@nestjs/common';
import { GetService } from './get.service';

@Controller('get')
export class GetController {
    constructor(private readonly myService: GetService) {}

  @Get()
  getHello(): string {
    return this.myService.getHello();
  }
}
