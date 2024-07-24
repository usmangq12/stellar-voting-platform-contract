import { Injectable } from '@nestjs/common';
import { Keypair } from 'stellar-sdk';
// import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SignUpService {
  generateKeypair() {
    const keypair = Keypair.random(); // Generate a new keypair
    return {
      publicKey: keypair.publicKey(),
      secret: keypair.secret(),
    };
  }

  async registerUser(fullName: string, email: string, wallet: string, document: any) {
    // Generate Stellar keypair
    const { publicKey, secret } = this.generateKeypair();

    // Save user data to the database (you might use Prisma or another ORM)
    // await PrismaService.user.create({
    //   data: {
    //     fullName,
    //     email,
    //     wallet,
    //     publicKey,
    //     secret,
    //     document: document.buffer, // Handle file upload as necessary
    //   },
    // });

    return { publicKey, secret };
  }
}