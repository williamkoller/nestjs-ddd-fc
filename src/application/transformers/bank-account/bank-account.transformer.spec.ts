import { BankAccountTransformer } from './bank-account.transformer';
import { BankAccountModel } from '../../../infrastructure/database/mongodb/models/bank-account-model';

describe('BankAccountTransformer', () => {
  describe('toBankAccount', () => {
    it('should transform a BankAccountModel to a BankAccountModel with all properties', () => {
      // Arrange
      const bankAccount: BankAccountModel = {
        _id: 'some_id',
        accountNumber: '123',
        balance: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        // Add other properties as needed
      };

      // Act
      const transformedBankAccount =
        BankAccountTransformer.toBankAccount(bankAccount);

      // Assert
      expect(transformedBankAccount).toEqual(bankAccount);
    });

    it('should transform a BankAccountModel to a BankAccountModel without extra properties', () => {
      // Arrange
      const bankAccount: BankAccountModel = {
        _id: 'some_id',
        accountNumber: '123',
        balance: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Act
      const transformedBankAccount =
        BankAccountTransformer.toBankAccount(bankAccount);

      // Assert
      expect(transformedBankAccount).toEqual({
        _id: 'some_id',
        accountNumber: '123',
        balance: 100,
        createdAt: bankAccount.createdAt,
        updatedAt: bankAccount.updatedAt,
      });
    });
  });
});
