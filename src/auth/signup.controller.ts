import { Controller, Get } from '@nestjs/common';
import { SignUpService } from './signup.service';

@Controller('stellar')
export class SignUpController {
  constructor(private readonly stellarService: SignUpService) {}

  @Get('generate-keys')
  generateKeys() {
    const keys = this.stellarService.generateKeypair();
    return keys;
  }
}