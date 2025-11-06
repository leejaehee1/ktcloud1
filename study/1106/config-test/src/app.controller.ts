import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
// import service 대신 config service 사용
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  // config service 주입
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    // config service 사용
    return this.configService.get('MESSAGE') as string;
  }
}
