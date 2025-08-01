// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import SplashScreen from './src/screens/SplashScreen';
import SelectLevelScreen from './src/screens/SelectLevelScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }} edges={['top', 'bottom']}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home Screen" component={HomeScreen} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="QuizScreen" component={QuizScreen} />
          <Stack.Screen name="SelectLevelScreen" component={SelectLevelScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}