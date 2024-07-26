import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'; 
import { SignUpDto } from 'src/dto/sign-up.dto';
import { SignInDto } from 'src/dto/sign-in.dto';
import { Keypair } from 'stellar-sdk';

@Injectable()
export class AuthService {
  private challenges = new Map<string, { challenge: string; secret: string }>(); 

  private usersDB = new Map<string, { publicKey: string; secret: string }>();

  generateKeypair() {
    const keypair = Keypair.random(); // Generate a real Stellar keypair
    return {
      publicKey: keypair.publicKey(),
      secret: keypair.secret(),
    };
  }

  async registerUser(signUpDto: SignUpDto, document: Express.Multer.File) {
    const { fullName, email } = signUpDto;
    const { publicKey, secret } = this.generateKeypair();

    // Validate document type
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (!allowedTypes.includes(document.mimetype)) {
      throw new Error('Invalid file type. Only PNG, JPG, and JPEG are allowed.');
    }

    // Save user data to the simulated database
    this.usersDB.set(email, { publicKey, secret });

    // Generate a challenge and store it with the secret
    const challenge = uuidv4();
    this.challenges.set(email, { challenge, secret });

    // Return keys and challenge
    return { publicKey, secret, challenge };
  }

  async verifyChallenge(email: string, response: string) {
    const stored = this.challenges.get(email);
    if (!stored || response !== stored.challenge) {
      throw new Error('Invalid challenge response');
    }
    // Remove the challenge after successful verification
    this.challenges.delete(email);
    return true;
  }

  async signIn(signInDto: SignInDto) {
    const { email, publicKey, response } = signInDto;

    // Verify challenge response
    await this.verifyChallenge(email, response);

    // Simulate user sign-in (for demonstration)
    const user = this.usersDB.get(email);
    if (!user || user.publicKey !== publicKey) {
      throw new Error('Invalid credentials');
    }

    return { message: 'Sign-in successful' };
  }
}
