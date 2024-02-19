import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from './health-check.controller';

describe('HealthCheckController', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile();

    controller = module.get<HealthCheckController>(HealthCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be return Health check is OK', () => {
    expect(controller.healthCheck()).toEqual({
      message: 'Health check is OK!',
    });
  });

  it('should be defined redirectToHealthCheck', () => {
    expect(controller.redirectToHealthCheck()).toBeUndefined();
  });
});
