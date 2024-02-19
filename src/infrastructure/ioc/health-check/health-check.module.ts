import { Module } from '@nestjs/common';
import { HealthCheckController } from '../../../application/controllers/health-check/health-check.controller';

@Module({
  controllers: [HealthCheckController],
  exports: [HealthCheckController],
  providers: [HealthCheckController],
})
export class HealthCheckModule {}
