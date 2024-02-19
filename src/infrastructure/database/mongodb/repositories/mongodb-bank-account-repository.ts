import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BankAccountModel } from '../models/bank-account-model';
import { MongodbBankAccountRepositoryInterface } from '../../data-access/bank/mongodb-bank-repository.interface';
import { BankAccount } from '../../../../@core/domain/bank/bank.account';

export class MongodbBankAccountRepository
  implements MongodbBankAccountRepositoryInterface
{
  constructor(
    @InjectModel(BankAccountModel.name)
    private readonly bankAccountCollection: Model<BankAccountModel>,
  ) {}

  async insert(bankAccount: BankAccount): Promise<BankAccountModel> {
    return await this.bankAccountCollection.create(bankAccount);
  }
}
