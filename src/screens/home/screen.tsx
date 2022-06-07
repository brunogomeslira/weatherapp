import React, {useEffect, useState, useRef, useMemo, useCallback} from 'react';
import {Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {getWeatherMap} from '../../services/weatherMapApi';
import {WeatherMapList} from '../../services/types';
import * as Type from './types';
import {HomeView} from './view';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Search} from '../../global/components/search';
import {Loading} from '../../global/components/loading';

export const HomeScreen: React.FC = () => {
  const {navigate} = useNavigation<StackNavigationProp<any, any>>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['1%', 'CONTENT_HEIGHT'], []);
  const {dismiss} = useBottomSheetModal();
  const [headerData, setHeaderData] = useState({} as Type.headerProps);
  const [loading, setLoading] = useState(false);
  const [mainContentData, setMainContentData] = useState(
    {} as Type.mainContentProps,
  );
  const [listOptionsData, setListOptionsData] = useState(
    {} as Type.listOptionsProps,
  );
  const [weatherMapData, setWeatherMapData] = useState({} as WeatherMapList[]);
  const [weatherMapListData, setWeatherMapListData] = useState(
    {} as WeatherMapList[],
  );

  useEffect(() => {
    requestAuthorizationGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const split = (item: string) => {
    let splits = item.split(' ');
    return splits[0];
  };

  const getListOptions = (arr: any, key: string) => {
    const data = [
      ...new Map(
        arr.map((item: any) => [item[key], split(item.dt_txt)]),
      ).values(),
    ];
    return [...new Set(data)];
  };

  const createListOptions = (optionsList: any) => {
    let data: any = [];
    optionsList.map((item: string, index: number) => {
      data.push({
        title: item,
        active: index === 0 ? true : false,
      });
    });
    return data;
  };

  const requestData = async () => {
    Geolocation.getCurrentPosition(
      async position => {
        updateWeatherMap(
          position?.coords?.latitude,
          position?.coords?.longitude,
        );
      },
      error => {
        console.log(error);
      },
    );
  };

  const updateWeatherMap = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      const data = await getWeatherMap(latitude, longitude);

      setHeaderData({
        country: data.data.city.country,
        name: data.data.city.name,
      });

      setDataMainContent(data.data.list[0]);

      setWeatherMapListData(data.data.list);

      const optionsList = getListOptions(data.data.list, 'dt_txt');

      const dataOptions = createListOptions(optionsList);
      setListOptionsData(dataOptions);

      setWeatherMapData(filterDateMap(data.data.list, dataOptions[0].title));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const requestAuthorizationGeolocation = (): Promise<boolean> => {
    return new Promise(resolve => {
      Geolocation.getCurrentPosition(
        () => {
          requestData();
          resolve(true);
        },
        () => {
          Linking.openSettings();
          resolve(false);
        },
      );
    });
  };

  const filterDateMap = (array: any, value: string) => {
    return array.filter((item: any) => split(item.dt_txt) === value);
  };

  const handleSelectOption = (value: string) => {
    setWeatherMapData(filterDateMap(weatherMapListData, value));
  };

  const setDataMainContent = (list: WeatherMapList) => {
    setMainContentData({
      date: split(list.dt_txt),
      desc: list.weather[0].description,
      humidity: list.main.humidity,
      icon: list.weather[0].icon,
      temp: list.main.temp,
      windSpeed: list.wind.speed,
    });
  };

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  const openBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, [bottomSheetModalRef]);

  const onDismissBottomSheet = () => {
    dismiss('BottomSheetInfo');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HomeView
        headerData={headerData}
        mainContentData={mainContentData}
        listOptionsData={listOptionsData}
        onSelect={value => handleSelectOption(value)}
        onPress={item => setDataMainContent(item)}
        weatherMapData={weatherMapData}
        handleLocation={() => openBottomSheet()}
        handleInfo={() => navigate('Info')}
      />

      <BottomSheetModal
        name="BottomSheetInfo"
        ref={bottomSheetModalRef}
        index={1}
        backdropComponent={BottomSheetBackdrop}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enableDismissOnClose
        onChange={handleSheetChanges => {
          if (handleSheetChanges === 0) {
            onDismissBottomSheet();
          }
        }}
        onDismiss={() => onDismissBottomSheet()}>
        <BottomSheetView onLayout={handleContentLayout}>
          <Search
            onPressLocation={item => {
              updateWeatherMap(item.lat, item.lon);
            }}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};
