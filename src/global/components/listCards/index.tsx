import React from 'react';
import {Card} from '../card';
import {WeatherMapList} from '../../../services/types';
import {FlatList} from 'react-native';
import * as S from './style';

type ListCardsProps = {
  weatherMapData: WeatherMapList[];
  onPress: (item: WeatherMapList) => void;
};

export const ListCards: React.FC<ListCardsProps> = ({
  weatherMapData,
  onPress,
}) => {
  return (
    <S.Container>
      <FlatList
        keyExtractor={(_, index): string => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={weatherMapData}
        renderItem={({item}) => {
          return (
            <Card
              icon={item?.weather[0]?.icon}
              temp={item?.main?.temp}
              time={item?.dt_txt}
              item={item}
              onPress={onPress}
            />
          );
        }}
      />
    </S.Container>
  );
};
