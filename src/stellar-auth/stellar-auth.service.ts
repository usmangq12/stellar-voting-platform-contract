// import { Injectable } from '@nestjs/common';
// import { Keypair, Networks, TransactionBuilder, Transaction, BASE_FEE, Account, Operation } from 'stellar-sdk';

// @Injectable()
// export class StellarAuthService {
//   private networkPassphrase: string;
//   private signingKeypair: Keypair;

//   constructor() {
//     this.networkPassphrase = Networks.TESTNET; // Use Networks.PUBLIC for mainnet
//     this.signingKeypair = Keypair.fromSecret('YOUR_SECRET_KEY'); // Replace with your secret key
//   }

//   generateChallenge(publicKey: string): string {
//     const account = new Account(this.signingKeypair.publicKey(), "0");
//     const transaction = new TransactionBuilder(account, {
//       fee: BASE_FEE,
//       networkPassphrase: this.networkPassphrase,
//     })
//       .addOperation(Operation.manageData({
//         name: 'Stellar Authentication',
//         value: publicKey,
//       }))
//       .setTimeout(300)
//       .build();

//     transaction.sign(this.signingKeypair);
//     return transaction.toXDR();
//   }

//   verifyChallenge(transactionXDR: string, publicKey: string): boolean {
//     try {
//       const transaction = new Transaction(transactionXDR, this.networkPassphrase);
//       const keypair = Keypair.fromPublicKey(publicKey);

//       const isValid = transaction.signatures.some(signature => {
//         return keypair.verify(transaction.hash(), signature.signature());
//       });

//       return isValid;
//     } catch (error) {
//       console.error('Verification failed', error);
//       return false;
//     }
//   }
// }