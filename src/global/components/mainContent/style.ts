import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding-horizontal: ${({theme}) => theme.padding.MD};
  /* background-color: antiquewhite; */
`;
export const Image = styled.Image`
  width: 150px;
  height: 90px;
`;
export const Desc = styled.Text`
  font-size: ${({theme}) => theme.fontSize.MD};
  font-family: ${({theme}) => theme.fontFamily.NunitoSemiBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;
export const Temp = styled.Text`
  font-size: ${({theme}) => theme.fontSize.XL};
  font-family: ${({theme}) => theme.fontFamily.NunitoExtraBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;
export const WindSpeed = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.NunitoSemiBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;
export const Humidity = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.NunitoSemiBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;
