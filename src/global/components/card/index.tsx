import React from 'react';
import {Image} from 'react-native';
import {parseTime} from '../../utils/time';
import {WeatherMapList} from '../../../services/types';
import * as S from './style';

export type CardProps = {
  time: string;
  icon: string;
  temp: number;
  item: WeatherMapList;
  onPress: (item: WeatherMapList) => void;
};

export const Card: React.FC<CardProps> = ({
  icon,
  temp,
  time,
  item,
  onPress,
}) => {
  return (
    <S.Container onPress={() => onPress(item)}>
      <S.Time>{parseTime(time)}</S.Time>

      <Image
        style={{width: 80, height: 80}}
        source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
      />
      <S.Temp>{` ${String(temp).slice(0, 2)} °`}</S.Temp>
    </S.Container>
  );
};
