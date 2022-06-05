import React from 'react';
import {TouchableOpacity} from 'react-native';
import Location from '../../assets/icons/location.svg';
import More from '../../assets/icons/more.svg';
import Info from '../../assets/icons/info.svg';
import * as S from './style';
import {useTheme} from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

type HeaderProps = {
  description: string;
  handleLocation: () => void;
  handleInfo: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  description,
  handleLocation,
  handleInfo,
}) => {
  const {colors} = useTheme();
  return (
    <S.header>
      <Location
        width={responsive(4)}
        height={responsive(4)}
        fill={colors.BLUE_DARK}
      />
      <S.TouchableOpacity onPress={handleLocation}>
        <S.Description testID="header-description">{description}</S.Description>
        <More
          width={responsive(4)}
          height={responsive(4)}
          fill={colors.BLUE_DARK}
        />
      </S.TouchableOpacity>
      <TouchableOpacity onPress={handleInfo}>
        <Info
          width={responsive(4)}
          height={responsive(4)}
          fill={colors.BLUE_DARK}
        />
      </TouchableOpacity>
    </S.header>
  );
};
