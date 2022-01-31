import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherInfo, WeatherAPIReponseInterface, WeatherAPIInterface } from './models/weather.models';


@Injectable({
  providedIn: 'root'
})
export class WeatherFormService {

  private baseUrl: string 
  private apiKey = '616d92ce51ae3a24ae15d46cedfff5b0'

  //Inyeccion de dependencias
  constructor(private http: HttpClient) {
    this.baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
   }

  //  getWeather(cityName: string) {
  //   return this.http.get(`${this.baseUrl}${cityName}`)
  //  }
   
  //  getWeatherMain(cityName: string) {
  //    return this.http.get(`${this.baseUrl}${cityName}`)
  //  }

   getWeather(cityName: string): Observable<WeatherInfo[]> {
     return this.http.get<WeatherAPIReponseInterface>(`${this.baseUrl}${cityName}`)
     .pipe(map((response: WeatherAPIReponseInterface) => {
       const info: WeatherInfo[] = response.weather.map((weather: WeatherAPIInterface) => {
         const weatherInformation: WeatherInfo = {
           name: response.name,
           country: response.sys.country,
           main: weather.main,
           description: weather.description,
           icon: weather.icon,
           temp: response.main.temp,
           feels_like: response.main.feels_like,
           humidity: response.main.humidity,
           temp_max: response.main.temp_max,
           temp_min: response.main.temp_min
         }
         return weatherInformation
       })
       return info
     }))
   }
}

