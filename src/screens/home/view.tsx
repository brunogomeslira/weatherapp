import React from 'react';
import {SafeAreaView} from 'react-native';
import {Card} from '../../global/components/card';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'styled-components/native';
import {Header} from '../../global/components/header';
import {MainContent} from '../../global/components/mainContent';

export type HomeViewProps = {};

export const HomeView: React.FC<HomeViewProps> = ({}) => {
  const {colors} = useTheme();
  return (
    <LinearGradient style={{flex: 1}} colors={colors.LINEAR_BLUE}>
      <SafeAreaView>
        <Header
          description={'São Paulo'}
          handleLocation={() => {
            console.log('handleLocation');
          }}
          handleInfo={() => {
            console.log('handleInfo');
          }}
        />
        <MainContent
          icon={'04n'}
          desc={'nublado'}
          temp={'289.62'}
          windSpeed={'1.33'}
          humidity={'96'}
        />
        <Card icon={'04n'} max={'287.3122'} min={'287.31'} time={'288.38'} />
      </SafeAreaView>
    </LinearGradient>
  );
};
