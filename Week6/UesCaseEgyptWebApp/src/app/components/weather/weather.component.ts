import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from 'src/app/services/get-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private citiesWeather: GetWeatherService) { }

  ngOnInit(): void {
    this.weatherData = this.citiesWeather.getData();
  }

}
