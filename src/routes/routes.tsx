import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/index';

const Stack = createNativeStackNavigator();

export const Routes: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'Info'}
          component={() => (
            <SafeAreaView>
              <Text>oi1</Text>
            </SafeAreaView>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
