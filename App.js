/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <WebView source={{ uri: 'https://epalengke.com/mm' }} startInLoadingState="true" />
    </SafeAreaView>

  );
};
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
