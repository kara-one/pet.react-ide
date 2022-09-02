import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'api.localhost' })
export class ApiController {
  @Get()
  index(): string {
    return 'Root Api';
  }
}
