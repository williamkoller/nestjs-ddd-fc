import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BankAccountModel,
  BankAccountSchema,
} from './mongodb/models/bank-account-model';
import { MongodbBankAccountRepository } from './mongodb/repositories/mongodb-bank-account-repository';

@Module({
  imports: [
    MongodbModule,
    MongooseModule.forFeature([
      {
        name: BankAccountModel.name,
        schema: BankAccountSchema,
      },
    ]),
  ],
  exports: [MongodbBankAccountRepository, MongodbModule],
  providers: [MongodbBankAccountRepository],
})
export class DatabaseModule {}
