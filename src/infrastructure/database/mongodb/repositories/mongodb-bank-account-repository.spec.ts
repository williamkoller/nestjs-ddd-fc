import { Model } from 'mongoose';
import { BankAccountModel } from '../models/bank-account-model';
import { MongodbBankAccountRepository } from './mongodb-bank-account-repository';
import { BankAccount } from '../../../../@core/domain/bank/bank.account';

const modelMock = {
  create: jest.fn(),
  save: jest.fn(),
} as unknown as Model<BankAccountModel>;

describe('MongodbBankAccountRepository', () => {
  let mongodbBankAccountRepository: MongodbBankAccountRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mongodbBankAccountRepository = new MongodbBankAccountRepository(modelMock);
  });

  test('insert', async () => {
    const bankAccount = new BankAccount(100, '123');

    await mongodbBankAccountRepository.insert(bankAccount);

    expect(modelMock.create).toHaveBeenCalledWith(bankAccount);
  });
});
