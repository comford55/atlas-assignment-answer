import { Module } from '@nestjs/common';
import { WeatherController } from './controllers/weather/weather.controller';
import { WeatherService } from './services/weather/weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WeatherController],
  providers: [WeatherService]
})
export class WeatherModule {}
