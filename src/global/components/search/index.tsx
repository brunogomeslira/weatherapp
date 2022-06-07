import React, {useState} from 'react';
import * as S from './style';
import {getLocationWeatherMap} from '../../../services/weatherMapApi';
import Location from '../../assets/icons/location.svg';
import {ResponseLocation} from '../../../services/types';
import {FlatList} from 'react-native';
import {useTheme} from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';

export type SearchProps = {
  onPressLocation: (item: ResponseLocation) => void;
};

export const Search: React.FC<SearchProps> = ({onPressLocation}) => {
  const {colors} = useTheme();
  const [locationData, setLocationData] = useState<any>();
  const {dismiss} = useBottomSheetModal();

  const getLocation = async (value: string) => {
    const {data} = await getLocationWeatherMap(value);
    setLocationData(data);
  };

  const handleLocation = (item: ResponseLocation) => {
    dismiss('BottomSheetInfo');
    onPressLocation(item);
  };

  return (
    <S.Container>
      <S.Input placeholder="Pesquise sua cidade" onChangeText={getLocation} />
      <FlatList
        keyExtractor={(_, index): string => index.toString()}
        data={locationData}
        renderItem={({item}) => (
          <S.TouchableOpacity onPress={() => handleLocation(item)}>
            <Location
              width={responsive(3)}
              height={responsive(3)}
              fill={colors.BLUE_DARK}
            />
            <S.Desc>
              {`${item.country ? item.country : ''}, ${
                item.name ? item.name : ''
              } ${item.state ? item.state : ''}`}
            </S.Desc>
          </S.TouchableOpacity>
        )}
      />
    </S.Container>
  );
};
