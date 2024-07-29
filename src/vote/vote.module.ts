import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';

@Module({
  imports: [ConfigModule],
  providers: [VoteService],
  controllers: [VoteController]
})
export class VoteModule {}
