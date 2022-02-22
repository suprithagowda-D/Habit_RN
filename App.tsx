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
import StepsScreen from './src/pages/StepsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Prize from './src/pages/Prize';
import store from './src/store/store';
import Home from './src/pages/Home';
import Weather from './src/pages/Weather';
import {Provider} from 'react-redux';
import CheckConnection from './src/utilis/CheckConnetion';
import ErrorCard from './src/components/ErrorCard';



const Stack = createNativeStackNavigator();
const App = () => {
  let network = CheckConnection();
  if (network === false) {
    return <ErrorCard />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="StepsScreen"
            component={StepsScreen}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Prize"
            component={Prize}
            options={{ title: 'Prize Screen' }}
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

export default App;
