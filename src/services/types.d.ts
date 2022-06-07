export interface WeatherProps {
  description: string; // "nublado"
  icon: string; // "04n"
  id: number; // 803
  main: string; // "Clouds"
}

export interface WeatherMapList {
  clouds: {
    all: number; // 75
  };
  dt: number; // 1654473600
  dt_txt: string; // "2022-06-06 00:00:00"
  main: {
    feels_like: number; // 289.39
    grnd_level: number; // 932
    humidity: number; // 96
    pressure: number; // 1022
    sea_level: number; // 1022
    temp: number; // 289.22
    temp_kf: number; // 0.23
    temp_max: number; // 289.22
    temp_min: number; //288.99
  };
  pop: number; // 0
  sys: {
    pod: string; //"n"
  };
  visibility: number; // 7132
  weather: WeatherProps[];
  wind: {
    deg: number; // 166
    gust: number; // 1.97
    speed: number; // 1.33
  };
}

export interface ResponseWeatherMap {
  city: {
    coord: {
      lat: number; // -23.6908
      lon: number; //-46.7539
    };
    country: string; // 'BR'
    id: number; // 3467722
    name: string; //'Campo Limpo';
    population: number; // 0
    sunrise: number; // 1654422221
    sunset: number; // 1654460859
    timezone: number; //  -10800
  };
  cnt: number; // 40
  cod: string; // '200';
  list: WeatherMapList[];
  message: number; // 0
}

export interface ResponseLocation {
  country: string; // "PT"
  lat: number; //41.7493198
  lon: number; //-8.3919997
  name: string; // "Aboim da Nóbrega"
  state: string; // "PT"
}
