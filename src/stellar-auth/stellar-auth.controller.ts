// import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
// import { StellarAuthService } from './stellar-auth.service';

// @Controller('stellar-auth')
// export class StellarAuthController {
//   constructor(private readonly stellarAuthService: StellarAuthService) {}

//   @Post('challenge')
//   generateChallenge(@Body('publicKey') publicKey: string): { challenge: string } {
//     if (!publicKey) {
//       throw new BadRequestException('Public key is required');
//     }
//     const challenge = this.stellarAuthService.generateChallenge(publicKey);
//     return { challenge };
//   }

//   @Post('verify')
//   verifyChallenge(
//     @Body('transactionXDR') transactionXDR: string,
//     @Body('publicKey') publicKey: string,
//   ): { success: boolean } {
//     if (!transactionXDR || !publicKey) {
//       throw new BadRequestException('Transaction XDR and public key are required');
//     }
//     const success = this.stellarAuthService.verifyChallenge(transactionXDR, publicKey);
//     return { success };
//   }
// }
