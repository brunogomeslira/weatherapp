import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Card} from '../src/global/components/card';

test('examples of some things', async () => {
  const {getByTestId, getByText, queryByTestId, toJSON} = render(
    <Card
      date={'2022-06-05 03:00:00'}
      icon={'04n'}
      max={'287.31'}
      min={'287.31'}
      time={'288.38'}
    />,
  );
  const date = '2022-06-05 03:00:00';
  // const input = getByTestId('input')
  // fireEvent.changeText(input, famousProgrammerInHistory)
  const time = getByText('288.38');
  console.log(time);
  // fireEvent.press(button)
  await waitFor(() => expect(queryByTestId('date-card')).toBeTruthy());
  expect(getByTestId('date-card').props.children).toBe(date);
  // expect(toJSON()).toMatchSnapshot();
});
