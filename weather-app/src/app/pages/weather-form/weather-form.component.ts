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

  //Inyeccion de dependencias
  constructor(private weatherFormService: WeatherFormService) { }

   //Inicializamos el listado de info
  ngOnInit(): void {
    this.getWeatherInfo('')
  }

     getWeatherInfo(cityName: string): void {
     this.weatherFormService.getWeather(cityName).subscribe(
       res => {
         this.weatherInfo = res
       },
       err => console.log(err)
     )
  }

  submitLocation(cityName: HTMLInputElement) {
    this.getWeatherInfo(cityName.value)

    //Para que limpie el formulario:
    cityName.value = ''
    cityName.focus()
    return false
  }

}
