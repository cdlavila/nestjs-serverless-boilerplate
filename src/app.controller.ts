import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Returns the welcome message' })
  @ApiResponse({
    status: 200,
    schema: { example: 'Welcome to the Boilerplate API!' },
  })
  @Get()
  sayWelcome(): string {
    return this.appService.getWelcome();
  }
}
