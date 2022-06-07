import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import * as S from './style';

export const Loading: React.FC = () => {
  const {colors} = useTheme();
  return (
    <LinearGradient style={{flex: 1}} colors={colors.LINEAR_ORANGE}>
      <S.Container>
        <ActivityIndicator size="large" color={colors.BLUE_DARK} />
      </S.Container>
    </LinearGradient>
  );
};
