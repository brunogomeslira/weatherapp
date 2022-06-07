import styled from 'styled-components/native';

export const header = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${({theme}) => theme.padding.MD};
`;
export const TouchableOpacity = styled.TouchableOpacity`
  padding-horizontal: ${({theme}) => theme.padding.XXS};
  flex: 1;
  align-items: center;
  flex-direction: row;
`;
export const Description = styled.Text`
  font-size: ${({theme}) => theme.fontSize.MMD};
  color: ${({theme}) => theme.colors.BLUE_DARK};
  font-family: ${({theme}) => theme.fontFamily.NunitoExtraBold};
`;
