import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountController } from './bank-account.controller';
import { AddBankUseCase } from '../../../application/usecases/bank/add-bank.usecase';
import { AddBankAccountDto } from '../../../application/dtos/bank-account/add-bank-account.dto';
import { BankAccount } from '../../../@core/domain/bank/bank.account';

describe('BankAccountController', () => {
  let controller: BankAccountController;
  let addBankUseCase: AddBankUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankAccountController],
      providers: [
        {
          provide: AddBankUseCase,
          useValue: {
            create: jest.fn().mockResolvedValue(new BankAccount(100, '456')),
          },
        },
      ],
    }).compile();

    controller = module.get<BankAccountController>(BankAccountController);
    addBankUseCase = module.get<AddBankUseCase>(AddBankUseCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add a bank account', async () => {
    const dto: AddBankAccountDto = {
      balance: 100,
      accountNumber: '456',
    };

    const result = await controller.addBankAccount(dto);

    expect(addBankUseCase.create).toHaveBeenCalledWith(
      dto.balance,
      dto.accountNumber,
    );

    expect(result).toBeInstanceOf(BankAccount);
  });
});
