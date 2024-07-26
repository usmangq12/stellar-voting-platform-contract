import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class ChallengeResponseDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  publicKey: string;

  @IsString()
  @IsNotEmpty()
  signedChallenge: string;
}
