import { Module } from '@nestjs/common';
import { SignUpService } from './signup.service';
import { SignUpController } from './signup.controller';

@Module({
  providers: [SignUpService],
  controllers: [SignUpController],
})
export class SignUpModule {}