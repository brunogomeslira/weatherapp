import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.NunitoBold};
  color: ${({theme}) => theme.colors.BLACK};
`;
