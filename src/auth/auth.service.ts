import { Injectable } from '@nestjs/common';
import { Keypair } from 'stellar-sdk';
import { SignUpDto } from 'src/dto/sign-up.dto';

@Injectable()
export class AuthService {
  generateKeypair() {
    const keypair = Keypair.random(); // Generate a new keypair
    return {
      publicKey: keypair.publicKey(),
      secret: keypair.secret(),
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<{ publicKey: string; secret: string }> {
    const { fullName, email, wallet, document } = signUpDto;
    const { publicKey, secret } = this.generateKeypair();

    // Save user data to the database (e.g., using Prisma or another ORM)
    // await this.prisma.user.create({
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
