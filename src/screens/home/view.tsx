import React from 'react';
import {SafeAreaView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../global/components/header';
import {MainContent} from '../../global/components/mainContent';
import {ListOptions} from '../../global/components/listOptions';
import {ListCards} from '../../global/components/listCards';
import {WeatherMapList} from '../../services/types';
import {useTheme} from 'styled-components/native';
import * as Type from './types';

export type HomeViewProps = {
  headerData: Type.headerProps;
  mainContentData: Type.mainContentProps;
  listOptionsData: any;
  onSelect: (value: string) => void;
  weatherMapData: WeatherMapList[];
  onPress: (item: WeatherMapList) => void;
  handleLocation: () => void;
  handleInfo: () => void;
};

export const HomeView: React.FC<HomeViewProps> = ({
  headerData,
  mainContentData,
  listOptionsData,
  onSelect,
  weatherMapData,
  onPress,
  handleLocation,
  handleInfo,
}) => {
  const {colors} = useTheme();
  return (
    <LinearGradient style={{flex: 1}} colors={colors.LINEAR_ORANGE}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          description={`${headerData.country}, ${headerData.name}`}
          handleLocation={handleLocation}
          handleInfo={handleInfo}
        />
        <MainContent
          date={mainContentData.date}
          icon={mainContentData.icon}
          desc={mainContentData.desc}
          temp={mainContentData.temp}
          windSpeed={mainContentData.windSpeed}
          humidity={mainContentData.humidity}
        />
        <View>
          <ListOptions
            handleOptions={value => onSelect(value)}
            data={listOptionsData}
          />
          <ListCards
            weatherMapData={weatherMapData}
            onPress={item => onPress(item)}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
