import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CandidateDto } from 'src/dto/candidate.dto';

@Controller('candidate')
export class CandidateController {
  @Post('register')
  @UseInterceptors(FileInterceptor('photo', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      }
    })
  }))
  async registerCandidate(
    @Body() candidateDto: CandidateDto,
    @UploadedFile() photo: Express.Multer.File
  ) {
    // Here you would handle the registration logic
    // For example, save candidate data to the database
    // and handle the uploaded file as needed

    // Simulate success response
    return {
      message: 'Candidate registered successfully',
      candidate: candidateDto,
      photo: photo ? photo.filename : null
    };
  }
}
