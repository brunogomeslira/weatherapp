import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({theme}) => theme.padding.MD};
`;
export const Image = styled.Image`
  width: 150px;
  height: 90px;
`;
export const Desc = styled.Text`
  font-size: ${({theme}) => theme.fontSize.MD};
  font-family: ${({theme}) => theme.fontFamily.NunitoSemiBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
  text-transform: capitalize;
`;
export const Temp = styled.Text`
  font-size: ${({theme}) => theme.fontSize.XL};
  font-family: ${({theme}) => theme.fontFamily.NunitoExtraBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
  text-transform: capitalize;
`;
export const WindSpeed = styled.Text`
  margin-left: ${({theme}) => theme.margin.XXXS};
  margin-right: ${({theme}) => theme.margin.MD};
  font-family: ${({theme}) => theme.fontFamily.NunitoSemiBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;
export const Humidity = styled.Text`
  margin-left: ${({theme}) => theme.margin.XXXS};
  margin-right: ${({theme}) => theme.margin.MD};
  font-family: ${({theme}) => theme.fontFamily.NunitoSemiBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
