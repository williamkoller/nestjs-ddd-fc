import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class HealthCheckController {
  @Get('health-check')
  healthCheck() {
    return {
      message: 'Health check is OK!',
    };
  }

  @Get()
  @Redirect('health-check', 302)
  redirectToHealthCheck() {
    return;
  }
}
