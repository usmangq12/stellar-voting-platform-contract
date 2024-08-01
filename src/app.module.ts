import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetController } from './get/get.controller';
import { GetService } from './get/get.service';
import { AuthModule } from './auth/auth.module';
import { CandidateModule } from './candidate/candidate.module';
import { VoteModule } from './vote/vote.module';
import * as fs from 'fs';
import * as path from 'path';

const ormconfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'ormconfig.json'), 'utf8'));

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: ormconfig.type,
      host: ormconfig.host,
      port: ormconfig.port,
      username: ormconfig.username,
      password: ormconfig.password,
      database: ormconfig.database,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: ormconfig.synchronize,
    }),
    AuthModule,
    CandidateModule,
    VoteModule,
  ],
  controllers: [AppController, GetController],
  providers: [AppService, GetService],
})

export class AppModule {}
