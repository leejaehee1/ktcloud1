import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// config module 추가
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';

@Module({
  // config module 설정
  imports: [ConfigModule.forRoot({ isGlobal: true }), WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
