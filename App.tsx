/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import StepsScreen from './src/components/StepTracker/StepsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Reward from './src/pages/RewardScreen';
import store from './src/store/store';
import Weather from './src/components/Weather/WeatherScreen';
import {Provider} from 'react-redux';
import CheckConnection from './src/utilis/CheckConnetion';
import ErrorCard from './src/components/Error/ErrorCard';
import HomePage from './src/pages/HomeScreen';
import {Text} from "react-native";
import StorybookUI from './storybook';
import Config from 'react-native-config';

const Stack = createNativeStackNavigator();
const App = () => {
  let network = CheckConnection();
  if (network === false) {
    return <ErrorCard />;
  }
  return (
    <Provider store={store}>
      <Text  testID="stepOne">
     Step One
      </Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Health"
            component={HomePage}

            />
          <Stack.Screen
            name="StepsScreen"
            component={StepsScreen}

          />
          <Stack.Screen
            name="Reward"
            component={Reward}
            options={{ title: 'Reward' }}
          />
          <Stack.Screen
            name="Weather"
            component={Weather}
            options={{ title: 'Weather' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App ;
