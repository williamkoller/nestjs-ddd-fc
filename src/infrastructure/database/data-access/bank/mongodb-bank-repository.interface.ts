import { BankAccount } from 'src/@core/domain/bank/bank.account';
import { BankAccountModel } from '../../mongodb/models/bank-account-model';

export interface MongodbBankAccountRepositoryInterface {
  insert: (bankAccount: BankAccount) => Promise<BankAccountModel>;
}
