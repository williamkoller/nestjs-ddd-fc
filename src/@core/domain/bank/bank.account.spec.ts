import { BankAccount } from './bank.account';

describe('BankAccount Unit Tests', () => {
  it('should create a bank account', () => {
    const bankAccount = new BankAccount(100, '1234567890');
    expect(bankAccount.balance).toBe(100);
    expect(bankAccount.accountNumber).toBe('1234567890');
  });

  it('should be create a debit', () => {
    const bankAccount = new BankAccount(100, '1234567890');
    bankAccount.debit(50);
    expect(bankAccount.balance).toBe(50);
  });

  it('should be create a credit', () => {
    const bankAccount = new BankAccount(100, '1234567890');
    bankAccount.credit(50);
    expect(bankAccount.balance).toBe(150);
  });
});
