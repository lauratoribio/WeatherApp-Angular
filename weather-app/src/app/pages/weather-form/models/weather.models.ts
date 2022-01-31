//Modelo del FRONT
export interface WeatherInfo {
  name: string,
  country: string,
  main: string,
  description: string,
  icon: string,
  temp: number,
  feels_like: number,
  humidity: number,
  temp_min: number,
  temp_max: number
}

//Modelos de la API (Back)
export interface WeatherAPIReponseInterface {
  weather: WeatherAPIInterface[],
  main: {
    temp: number,
    feels_like: number,
    humidity: number,
    temp_min: number,
    temp_max: number
  },
  sys: {
     country: string
  },
  name: string,
}

export interface WeatherAPIInterface {
  main: string,
  description: string,
  icon: string
}
