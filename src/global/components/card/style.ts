import styled from 'styled-components/native';

export const Temp = styled.Text`
  font-size: ${({theme}) => theme.fontSize.MMD};
  font-family: ${({theme}) => theme.fontFamily.NunitoBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;

export const Time = styled.Text`
  font-size: ${({theme}) => theme.fontSize.SM};
  font-family: ${({theme}) => theme.fontFamily.NunitoMedium};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;

export const Container = styled.TouchableOpacity`
  width: 150px;
  height: 180px;
  margin-horizontal: ${({theme}) => theme.padding.XXS};
  background-color: ${({theme}) => theme.colors.WHITE_RGB};
  border-radius: ${({theme}) => theme.letterSpacing.LG};
  justify-content: center;
  align-items: center;
`;
