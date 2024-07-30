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
  phone?: string;

  @IsOptional()
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
