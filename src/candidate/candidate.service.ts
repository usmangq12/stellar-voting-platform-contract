import { Injectable } from '@nestjs/common';
import { CandidateDto } from 'src/dto/candidate.dto';

@Injectable()
export class CandidateService {
  async registerCandidate(candidateDto: CandidateDto, photo?: Express.Multer.File): Promise<any> {
    // Implement the logic to save the candidate and handle the photo

    return {
      message: 'Candidate registered successfully',
      candidate: candidateDto,
      photo: photo ? photo.filename : null
    };
  }
}
