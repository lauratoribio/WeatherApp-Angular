import { Component, OnInit } from '@angular/core';
import { weather } from './models/weather.models';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

  public weatherInfo: weather[] = []
  public weather: weather

  constructor() { }

  ngOnInit(): void {
    this.getCityInfo()
  }

  private getCityInfo(): void {

    this.weatherInfo = [
     {
      cityName: 'Madrid',
      src: 'dia-nublado.png',
      weather: 'Cubierto',
      temp: '8°C',
      temp_min: '9°C',
      temp_max: '2°C',
      humidity: '20%'
     },
     {
      cityName: 'Barcloma',
      src: '',
      weather: 'Despejado',
      temp: '11°C',
      temp_min: '13°C',
      temp_max: '2°C',
      humidity: '70%'
     },
     {
      cityName: 'Valencia',
      src: '',
      weather: 'Mayormente nublado',
      temp: '12°C',
      temp_min: '13°C',
      temp_max: '8°C',
      humidity: '79%'
     },
     {
      cityName: 'Sevilla',
      src: '',
      weather: 'Chubascos débiles',
      temp: '13°C',
      temp_min: '16°C',
      temp_max: '7°C',
      humidity: '73%'
     }
    ]

  }

}
