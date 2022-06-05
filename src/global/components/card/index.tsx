import React from 'react';
import {View, Text, Image} from 'react-native';
import * as S from './style';

export type CardProps = {
  time: string;
  icon: string;
  min: string;
  max: string;
};

export const Card: React.FC<CardProps> = ({icon, max, min, time}) => {
  return (
    <View>
      <Image
        style={{width: 60, height: 60}}
        source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
      />
      <S.Text>{max}</S.Text>
      <Text>{min}</Text>
      <Text>{time}</Text>
    </View>
  );
};
