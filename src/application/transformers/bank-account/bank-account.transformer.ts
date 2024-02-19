import { BankAccountModel } from '../../../infrastructure/database/mongodb/models/bank-account-model';

export class BankAccountTransformer {
  public static toBankAccount(bankAccount: BankAccountModel): BankAccountModel {
    return {
      _id: bankAccount._id,
      accountNumber: bankAccount.accountNumber,
      balance: bankAccount.balance,
      createdAt: bankAccount.createdAt,
      updatedAt: bankAccount.updatedAt,
    };
  }
}
