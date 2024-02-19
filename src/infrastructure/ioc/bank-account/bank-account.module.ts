import { Module } from '@nestjs/common';
import { BankAccountController } from '../../../application/controllers/bank-account/bank-account.controller';
import { AddBankUseCase } from '../../../application/usecases/bank/add-bank.usecase';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { MongodbBankAccountRepository } from '../../../infrastructure/database/mongodb/repositories/mongodb-bank-account-repository';
import { MongodbBankAccountRepositoryInterface } from 'src/infrastructure/database/data-access/bank/mongodb-bank-repository.interface';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: AddBankUseCase,
      useFactory: (
        bankAccountRepository: MongodbBankAccountRepositoryInterface,
      ) => {
        return new AddBankUseCase(bankAccountRepository);
      },
      inject: [MongodbBankAccountRepository],
    },
  ],
  controllers: [BankAccountController],
})
export class BankAccountModule {}
