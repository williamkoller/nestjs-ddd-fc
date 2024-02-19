import { MongodbBankAccountRepositoryInterface } from '../../../infrastructure/database/data-access/bank/mongodb-bank-repository.interface';
import { BankAccount } from '../../../@core/domain/bank/bank.account';
import { BankAccountModel } from '../../../infrastructure/database/mongodb/models/bank-account-model';
import { BankAccountTransformer } from '../../../application/transformers/bank-account/bank-account.transformer';

export class AddBankUseCase {
  constructor(
    private readonly bankAccountRepository: MongodbBankAccountRepositoryInterface,
  ) {}
  async create(
    balance: number,
    acccountNumber: string,
  ): Promise<BankAccountModel> {
    const bankAccount = new BankAccount(balance, acccountNumber);
    const bankAccountDB = await this.bankAccountRepository.insert(bankAccount);
    return BankAccountTransformer.toBankAccount(bankAccountDB);
  }
}
