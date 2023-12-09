import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
    constructor(private readonly httpService: HttpService) {}

    async getWeatherForecast(zip: string) {
        const countryCode = "TH"
        const API_KEY = "65c30b3194d7c141789fc9f4789c59e2"

        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${API_KEY}`
        const { data } = await firstValueFrom(this.httpService.get(url));
        console.log(data);
        return data;
    }
}
