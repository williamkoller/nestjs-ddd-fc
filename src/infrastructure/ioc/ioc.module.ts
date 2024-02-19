import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { BankAccountModule } from './bank-account/bank-account.module';

@Module({
  imports: [HealthCheckModule, BankAccountModule],
  exports: [HealthCheckModule, BankAccountModule],
})
export class IocModule {}
