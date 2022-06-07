import React from 'react';
import * as S from './style';
import {useTheme} from 'styled-components/native';
import {parseDate} from '../../utils/date';
import Wind from '../../assets/icons/wind.svg';
import Humidity from '../../assets/icons/humidity.svg';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

type MainContentProps = {
  date: string;
  icon: string;
  desc: string;
  temp: number;
  windSpeed: number;
  humidity: number;
};

export const MainContent: React.FC<MainContentProps> = ({
  date,
  icon,
  desc,
  temp,
  windSpeed,
  humidity,
}) => {
  const {colors} = useTheme();
  return (
    <S.Container>
      <S.Temp>{parseDate(date ? date : '')}</S.Temp>
      <S.Desc>{desc}</S.Desc>
      <S.Image
        source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
      />
      <S.Temp>{` ${String(temp).slice(0, 2)} °`}</S.Temp>
      <S.ContainerInfo>
        <Wind
          width={responsive(3)}
          height={responsive(3)}
          fill={colors.BLUE_DARK}
        />
        <S.WindSpeed>{`${windSpeed} km/h`}</S.WindSpeed>
        <Humidity
          width={responsive(3)}
          height={responsive(3)}
          fill={colors.BLUE_DARK}
        />
        <S.Humidity>{`${humidity} %`}</S.Humidity>
      </S.ContainerInfo>
    </S.Container>
  );
};
