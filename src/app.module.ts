import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetController } from './get/get.controller';
import { GetService } from './get/get.service';
// import { StellarAuthModule } from './stellar-auth/stellar-auth.module';
import { SignUpModule } from './auth/signup.module';

@Module({
  imports: [SignUpModule],
  controllers: [AppController, GetController, ],
  providers: [AppService, GetService ],
})
export class AppModule {}