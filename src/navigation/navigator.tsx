import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParams } from './rootStack';
import { HomeScreen } from '../screens/HomeScreen';
import { CreateItemScreen } from '../components/CreateItemModal';
import { createScreenOptions } from './screenOptions';

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigator = () => {
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
