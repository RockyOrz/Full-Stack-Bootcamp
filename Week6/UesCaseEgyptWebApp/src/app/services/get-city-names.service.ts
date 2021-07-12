import { Injectable } from '@angular/core';
import { GetWeatherService } from './get-weather.service';

@Injectable({
  providedIn: 'root',
})
export class GetCityNamesService {
  arrayWeather: any = [];
  arrayNames: any;

  constructor(private getWeatherService: GetWeatherService) {}

  getNames() {
    this.arrayNames = [];
    this.arrayWeather = this.getWeatherService.getData();
    for (let weather of this.arrayWeather) {
      this.arrayNames.push(weather.name);
    }
    return this.arrayNames;
  }
}
