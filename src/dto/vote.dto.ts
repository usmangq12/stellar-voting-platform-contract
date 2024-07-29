import { IsNotEmpty, IsString } from 'class-validator';

export class VoteDto {
  @IsNotEmpty()
  @IsString()
  readonly candidateId: string;

  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsNotEmpty()
  @IsString()
  readonly userPublicKey: string;

  @IsNotEmpty()
  @IsString()
  readonly userSecretKey: string;
}
