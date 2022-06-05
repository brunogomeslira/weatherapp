import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {
  getWeatherMap,
  getLocationWeatherMap,
} from '../../services/weatherMapApi';

import {HomeView} from './view';

export const HomeScreen: React.FC = () => {
  useEffect(() => {
    requestAuthorizationGeolocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestData = () => {
    Geolocation.getCurrentPosition(
      async position => {
        console.log(position);
        const data = await getWeatherMap(
          position?.coords?.latitude,
          position?.coords?.longitude,
        );

        const data1 = await getLocationWeatherMap('Bahia');

        console.log('data1 =====>', data1);

        console.log(data, 'data');
      },
      error => {
        console.log(error);
      },
    );
  };

  const requestAuthorizationGeolocation = (): Promise<boolean> => {
    return new Promise(resolve => {
      Geolocation.getCurrentPosition(
        () => {
          requestData();
          resolve(true);
        },
        () => {
          Linking.openSettings();
          resolve(false);
        },
      );
    });
  };

  return <HomeView />;
};
