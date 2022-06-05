import React from 'react';
import * as S from './style';
// import {useTheme} from 'styled-components/native';

type MainContentProps = {
  icon: string;
  desc: string;
  temp: string;
  windSpeed: string;
  humidity: string;
};

export const MainContent: React.FC<MainContentProps> = ({
  icon,
  desc,
  temp,
  windSpeed,
  humidity,
}) => {
  // const {colors} = useTheme();
  return (
    <S.Container>
      <S.Image
        source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
      />
      <S.Desc>{desc}</S.Desc>
      <S.Temp>{temp}</S.Temp>
      <S.WindSpeed>{windSpeed}</S.WindSpeed>
      <S.Humidity>{humidity}</S.Humidity>
    </S.Container>
  );
};
