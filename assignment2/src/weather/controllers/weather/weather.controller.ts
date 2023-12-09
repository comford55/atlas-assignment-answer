import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from 'src/weather/services/weather/weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) { }

    @Get()
    async getWeatherByZipcode(@Query('zip') zip: string) {
        const result = await this.weatherService.getWeatherForecast(zip);
        return result;
    }
}
