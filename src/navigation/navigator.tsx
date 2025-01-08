import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParams } from './rootStack';
import { ListScreen } from '../screens/ListScreen';
import { StatsScreen } from '../screens/StatsScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
