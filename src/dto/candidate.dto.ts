import { IsNotEmpty, IsString, IsOptional, IsEmail, Matches, IsPhoneNumber } from 'class-validator';

export class CandidateDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  campaignPlatform?: string;

  @IsOptional()
  @IsString()
  @IsEmail({}, { message: 'Email must be a valid email address.' })
  email?: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber(null, { message: 'Phone number must be a valid phone number.' })
  phone?: string;

  @IsOptional()
  @IsString()
  @Matches(/^https:\/\/twitter\.com\/[a-zA-Z0-9_]{1,15}$/, {
    message: 'The Twitter link must be a valid Twitter URL.',
  })
  twitter?: string;

  @IsOptional()
  @IsString()
  partyAffiliation?: string;

  @IsNotEmpty()
  @IsString()
  electionPosition: string;

  @IsNotEmpty()
  @IsString()
  experience: string;

  @IsString()
  publicKey?: string;

  @IsOptional()
  @IsString()
  photo?: string;
}
