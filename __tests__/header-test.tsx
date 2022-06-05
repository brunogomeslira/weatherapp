import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Header} from '../src/global/components/header';

test('examples of some things', async () => {
  const {getByTestId, getByText, queryByTestId, toJSON} = render(
    <Header
      description="times"
      handleLocation={() => {}}
      handleInfo={() => {}}
    />,
  );
  const date = 'times';
  //   const input = getByTestId('input');
  // fireEvent.changeText(input, famousProgrammerInHistory)
  const time = getByText('times');
  console.log(time);
  // fireEvent.press(button)
  await waitFor(() => expect(queryByTestId('header-description')).toBeTruthy());
  expect(getByTestId('header-description').props.children).toBe(date);
  // expect(toJSON()).toMatchSnapshot();
});
