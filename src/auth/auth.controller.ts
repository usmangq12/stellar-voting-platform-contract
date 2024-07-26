import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AuthService } from './auth.service';
import { SignUpDto } from 'src/dto/sign-up.dto';
import { SignInDto } from 'src/dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @UseInterceptors(FileInterceptor('document', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      }
    })
  }))
  async signUp(
    @Body() body: any,
    @UploadedFile() document: Express.Multer.File
  ) {
    const signUpDto: SignUpDto = {
      fullName: body['full-name'],
      email: body['email'],
    };

    const keys = await this.authService.registerUser(signUpDto, document);
    return keys;
  }

  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    const result = await this.authService.signIn(signInDto);
    return result;
  }
}
