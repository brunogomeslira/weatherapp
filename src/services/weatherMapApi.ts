import {API} from './index';
import {API_KEY_WEATHER_MAP} from '@env';

export const getWeatherMap = async (lat: number | null, lon: number | null) => {
  let lati = lat;
  let long = lon;

  lati = -23.6908;
  long = -46.7539;
  try {
    return await API.get(
      `/data/2.5/forecast?lat=${lati}&lon=${long}&lang=pt_br&&appid=${API_KEY_WEATHER_MAP}`,
    );
  } catch (err) {
    return err;
  }
};

export const getLocationWeatherMap = async (location: string) => {
  try {
    return await API.get(
      `/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY_WEATHER_MAP}`,
    );
  } catch (err) {
    return err;
  }
};
