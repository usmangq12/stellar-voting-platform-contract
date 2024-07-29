import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetController } from './get/get.controller';
import { GetService } from './get/get.service';
// import { StellarAuthModule } from './stellar-auth/stellar-auth.module';
import { authModule } from './auth/auth.module';
import { CandidateModule } from './candidate/candidate.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [authModule, CandidateModule, VoteModule],
  controllers: [AppController, GetController, ],
  providers: [AppService, GetService ],
})
export class AppModule {}