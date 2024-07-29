import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { VoteDto } from 'src/dto/vote.dto';
import { Keypair, TransactionBuilder, Asset, Networks, Operation, Memo } from 'stellar-sdk';
import Server from 'stellar-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VoteService {
//   private server: typeof Server;

  constructor(private configService: ConfigService) {
    // this.server = new Server(this.configService.get<string>("https://horizon-testnet.stellar.org"));
  }

  async registerVote(voteDto: VoteDto): Promise<any> {
    // Logic to register the vote in your system, e.g., save to database
    // For now, we just return a success message
    return { message: 'Vote registered successfully' };
  }

  async castVote(voteDto: VoteDto): Promise<any> {
    const { candidateId, userId, userPublicKey, userSecretKey } = voteDto;

    // Verify user public key and candidate ID exist
    if (!this.isUserValid(userPublicKey)) {
      throw new HttpException('Invalid user public key', HttpStatus.BAD_REQUEST);
    }
    if (!this.isCandidateValid(candidateId)) {
      throw new HttpException('Invalid candidate ID', HttpStatus.BAD_REQUEST);
    }

    const keypair = Keypair.fromSecret(userSecretKey);
    // const account = await this.server.loadAccount(userPublicKey);

    // const transaction = new TransactionBuilder(account, {
    //   fee: '100',
    //   networkPassphrase: Networks.PUBLIC,
    // })
    //   .addOperation(Operation.payment({
    //     destination: candidateId,
    //     asset: Asset.native(),
    //     amount: '1', // Amount representing one vote
    //   }))
    //   .addMemo(Memo.text(`Vote cast for candidate ${candidateId}`))
    //   .setTimeout(30)
    //   .build();

    // transaction.sign(keypair);

    try {
    //   await this.server.submitTransaction(transaction);
      return { message: 'Vote cast successfully' };
    } catch (error) {
      throw new HttpException('Failed to cast vote', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private isUserValid(publicKey: string): boolean {
    // Implement logic to validate user public key
    return true; // Placeholder
  }

  private isCandidateValid(candidateId: string): boolean {
    // Implement logic to validate candidate ID
    return true; // Placeholder
  }
}
