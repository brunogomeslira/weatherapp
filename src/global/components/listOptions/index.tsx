import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {parseDate} from '../../utils/date';
import * as S from './style';

type ItemOptionsProps = {
  title: string;
  active: boolean;
};

type listOptionsProps = {
  data: ItemOptionsProps[];
  handleOptions: (title: string) => void;
};

export const ListOptions: React.FC<listOptionsProps> = ({
  data,
  handleOptions,
}) => {
  const [option, setOption] = useState('');

  const selectHandler = (value: string) => {
    handleOptions(value);
    setOption(value);
  };

  return (
    <FlatList
      keyExtractor={(_, index): string => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item}) => (
        <S.Container onPress={() => selectHandler(item.title)}>
          <S.Title active={option === '' ? item.active : option === item.title}>
            {parseDate(item.title)}
          </S.Title>
        </S.Container>
      )}
    />
  );
};
