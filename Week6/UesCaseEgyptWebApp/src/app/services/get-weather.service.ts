import { Injectable } from '@angular/core';
import { CitiesWeather } from './city-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  citiesWeather: Object;

  constructor() {
    this.citiesWeather = CitiesWeather;
  }

  getData() {
    return this.citiesWeather;
  }
}
