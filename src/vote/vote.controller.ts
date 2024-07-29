import { Controller, Post, Body } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteDto } from 'src/dto/vote.dto';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post('register-vote')
  async registerVote(@Body() voteDto: VoteDto) {
    return this.voteService.registerVote(voteDto);
  }

  @Post('cast-vote')
  async castVote(@Body() voteDto: VoteDto) {
    return this.voteService.castVote(voteDto);
  }
}
