import { Body, Controller, Post } from '@nestjs/common';
import { AddBankAccountDto } from '../../../application/dtos/bank-account/add-bank-account.dto';
import { AddBankUseCase } from '../../../application/usecases/bank/add-bank.usecase';
import { BankAccountModel } from 'src/infrastructure/database/mongodb/models/bank-account-model';

@Controller('bank-account')
export class BankAccountController {
  constructor(private readonly addBankAccountUseCase: AddBankUseCase) {}

  @Post()
  async addBankAccount(
    @Body() bankAccount: AddBankAccountDto,
  ): Promise<BankAccountModel> {
    return this.addBankAccountUseCase.create(
      bankAccount.balance,
      bankAccount.accountNumber,
    );
  }
}
