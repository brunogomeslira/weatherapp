import styled from 'styled-components/native';

type TextProps = {
  active: boolean;
};

export const Container = styled.TouchableOpacity`
  align-items: center;
  padding-horizontal: ${({theme}) => theme.padding.MD};
  /* background-color: antiquewhite; */
`;

export const Title = styled.Text<TextProps>`
  margin-vertical: ${({theme}) => theme.margin.MD};
  text-transform: capitalize;
  font-size: ${({theme}) => theme.fontSize.MMD};
  font-family: ${({theme}) => theme.fontFamily.NunitoSemiBold};
  color: ${({theme}) => theme.colors.BLUE_DARK};
  opacity: ${({active}) => (active ? 1 : 0.5)};
`;
