import { Component, OnInit } from '@angular/core';
import { WeatherInfo } from './models/weather.models';
import { WeatherFormService } from './weather-form.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

  public weatherInfo: WeatherInfo[] = []
  public weather: WeatherInfo
  searchIsDone: boolean = false


  //Inyeccion de dependencias
  constructor(private weatherFormService: WeatherFormService) { }

   //Inicializamos el listado de info
  ngOnInit(): void {
    this.getWeatherInfo('madrid')
  }

     getWeatherInfo(cityName: string): void {
     this.weatherFormService.getWeather(cityName).subscribe(
       res => {
         this.weatherInfo = res
       },
       err => console.log(err)
     )
  }

  submitLocation(city: string) {
    this.getWeatherInfo(city)
  }

}
