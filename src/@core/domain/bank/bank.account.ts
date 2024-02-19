export class BankAccount {
  balance: number;
  accountNumber: string;

  constructor(balance: number, accountNumber: string) {
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  debit(amount: number): void {
    this.balance -= amount;
  }

  credit(amount: number): void {
    this.balance += amount;
  }
}
