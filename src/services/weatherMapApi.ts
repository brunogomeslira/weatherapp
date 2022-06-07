import {API} from './index';
import {API_KEY_WEATHER_MAP} from '@env';
import {ResponseWeatherMap, ResponseLocation} from './types';
import {AxiosResponse} from 'axios';

export const getWeatherMap = async (
  lat: number | null,
  lon: number | null,
): Promise<AxiosResponse<ResponseWeatherMap>> => {
  try {
    return await API.get(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pt_br&&appid=${API_KEY_WEATHER_MAP}`,
    );
  } catch (error: any) {
    return error;
  }
};

export const getLocationWeatherMap = async (
  location: string,
): Promise<AxiosResponse<ResponseLocation>> => {
  try {
    return await API.get(
      `/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY_WEATHER_MAP}`,
    );
  } catch (error: any) {
    return error;
  }
};
