import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const Container = styled.TouchableOpacity`
  height: ${windowHeight * 0.8}px;
`;

export const Input = styled.TextInput`
  padding: ${({theme}) => theme.margin.XXS};
  margin: ${({theme}) => theme.margin.XMD};
  color: ${({theme}) => theme.colors.BLUE_DARK};
  font-size: ${({theme}) => theme.fontSize.MMD};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.BLUE_DARK};
`;

export const Desc = styled.Text`
  color: ${({theme}) => theme.colors.BLUE_DARK};
  font-size: ${({theme}) => theme.fontSize.MMD};
  margin-left: ${({theme}) => theme.margin.XS};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${({theme}) => theme.margin.XS};
  margin-horizontal: ${({theme}) => theme.margin.LG};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.BLACK_2B};
`;
