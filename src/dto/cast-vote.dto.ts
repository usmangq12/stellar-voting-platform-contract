import { IsString, IsNotEmpty } from 'class-validator';

export class CastVoteDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  candidateId: string;

  @IsString()
  @IsNotEmpty()
  publicKey: string;
}