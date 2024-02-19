import { AddBankUseCase } from './add-bank.usecase';
import { MongodbBankAccountRepositoryInterface } from '../../../infrastructure/database/data-access/bank/mongodb-bank-repository.interface';
import { BankAccountModel } from '../../../infrastructure/database/mongodb/models/bank-account-model';
import { BankAccountTransformer } from '../../../application/transformers/bank-account/bank-account.transformer';

describe('AddBankUseCase', () => {
  let addBankUseCase: AddBankUseCase;
  let bankAccountRepositoryMock: jest.Mocked<MongodbBankAccountRepositoryInterface>;

  beforeEach(() => {
    bankAccountRepositoryMock = {
      insert: jest.fn(),
    } as jest.Mocked<MongodbBankAccountRepositoryInterface>;

    addBankUseCase = new AddBankUseCase(bankAccountRepositoryMock);
  });

  describe('create', () => {
    it('should create a bank account and return the transformed model', async () => {
      const initialBalance = 100;
      const accountNumber = '123';
      const expectedBankAccount: BankAccountModel = {
        _id: 'generated_id',
        accountNumber: accountNumber,
        balance: initialBalance,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      bankAccountRepositoryMock.insert.mockResolvedValue(expectedBankAccount);

      const result = await addBankUseCase.create(initialBalance, accountNumber);

      expect(result).toEqual(
        BankAccountTransformer.toBankAccount(expectedBankAccount),
      );
      expect(bankAccountRepositoryMock.insert).toHaveBeenCalledWith(
        expect.objectContaining({
          balance: initialBalance,
          accountNumber: accountNumber,
        }),
      );
    });
  });
});
