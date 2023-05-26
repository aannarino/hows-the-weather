export type AvailableLanguages =
  | 'af'
  | 'al'
  | 'ar'
  | 'az'
  | 'bg'
  | 'ca'
  | 'cz'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'kr'
  | 'la'
  | 'lt'
  | 'mk'
  | 'no'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt_br'
  | 'ro'
  | 'ru'
  | 'sv'
  | 'se'
  | 'sk'
  | 'sl'
  | 'sp'
  | 'es'
  | 'sr'
  | 'th'
  | 'tr'
  | 'ua'
  | 'uk'
  | 'vi'
  | 'zh_cn'
  | 'zh_tw'
  | 'zu';

export interface CurrentWeatherByLocationQueryParameters {
  lat: number; //latitude coordinate
  lon: number; //longitude coordinate
  appid: string; //api key
  mode?: 'xml' | 'html'; //Will use JSON if not specified
  units?: 'standard' | 'metric' | 'imperial'; //default is standard
  lang?: AvailableLanguages; //Gets the output in the specified language
}

export interface CurrentWeatherByCityQueryParameters {
  city: string;
  appid: string;
  limit?: number;
  mode?: 'xml' | 'html'; //Will use JSON if not specified
  units?: 'standard' | 'metric' | 'imperial'; //default is standard
  lang?: AvailableLanguages; //Gets the output in the specified language
}

export interface CurrentWeatherByLocationResponse {
  coord: {
    lon: number; //longitude of location
    lat: number; //latitude of location
  };
  weather: Array<{
    id: number;
    main: string; //group of weather parameters (rain, snow, extreme, etc)
    description: string; //weather condition within group (moderate rain). can be obtained by adding a lang query parameter to the request
    icon: string; //weather icon id
  }>;
  base: string;
  main: {
    temp: number; //default unit kelvin
    feels_like: number; // temperature accounting for human perception. Default unit kelvin
    pressure: number; // atmospheric pressure at sea level (or ground if sea level is not available). units hPa
    humidity: number; //humidtiy in percentage
    temp_min: number; //default unit kelvin
    temp_max: number; //default unit kelvin
    sea_level: number; //atmospheric pressure at sea level. unit hPa
    grnd_level: number; //atmospheric pressure at ground level. unit hPa
  };
  visibility: number; //maximum value is 10km
  wind: {
    speed: number; //default unit meter/sec
    deg: number; //wind direction in degrees (meterological)
    gust: number; //default meter/sec
  };
  clouds?: {
    all?: number; //cloudiness in percentage
  };
  rain?: {
    '1h'?: number; //rain volume for last hour mm
    '3h'?: number; //rain volume for last 3 hours mm
  };
  snow?: {
    '1h'?: number; //snow volume last hour mm
    '3h'?: number; //snow volume last 3 hours mm
  };
  dt: number; //time of data calculation unix UTC
  sys: {
    type: number;
    id: number;
    message: string;
    country: string; //country code
    sunrise: number; //sunrise time unix utc
    sunset: number; //sunset time unix utc
  };
  timezone: number; //shift in seconds from UTC
  id: number; //city id (deprecated)
  name: string; //city name
  cod: number;
}

export interface GeocodingQueryParameters {
  q: string; //City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.
  appid: string; //apikey
  limit?: number; //Number of locations in the API response (maximum of 5)
}

export interface GeocodingResponse {
  name: string; //name of found location
  local_names?: {};
  lat: number; //latitude of found location
  lon: number; //longitude of found location
  country: string; //country of found location
  state?: string; //state (if available) of found location
}
