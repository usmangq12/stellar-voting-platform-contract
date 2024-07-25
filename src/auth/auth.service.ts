import { Injectable } from '@nestjs/common';
import { Keypair } from 'stellar-sdk';
import { SignUpDto } from 'src/dto/sign-up.dto';
import { SignInDto } from 'src/dto/sign-in.dto';

@Injectable()
export class AuthService {
  generateKeypair() {
    const keypair = Keypair.random();
    return {
      publicKey: keypair.publicKey(),
      secret: keypair.secret(),
    };
  }

  async registerUser(signUpDto: SignUpDto, document: Express.Multer.File) {
    const { fullName, email } = signUpDto;

    // Validate document type
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (!allowedTypes.includes(document.mimetype)) {
      throw new Error('Invalid file type. Only PNG, JPG, and JPEG are allowed.');
    }

    const { publicKey, secret } = this.generateKeypair();

    console.log('Received file:', document);

    // Save user data to the database (e.g., using Prisma or another ORM)
    // await prisma.user.create({
    //   data: {
    //     fullName,
    //     email,
    //     publicKey,
    //     secret,
    //     document: document.filename, // Store the filename or file buffer
    //   },
    // });

    return { publicKey, secret };
  }


  async signIn(signInDto: SignInDto) {
    // Fetch the user from the database using the email
    // Example with a pseudo database service
    // const user = await this.databaseService.findUserByEmail(signInDto.email);

    // Verify the provided public key
    // Example verification
    // if (user.publicKey !== signInDto.publicKey) {
    //   throw new Error('Invalid email or public key');
    // }

    return { message: 'Sign-in successful. You can now cast your vote.' };
  }
}

