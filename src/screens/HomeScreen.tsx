import { View, Text } from 'react-native';
import React from 'react';
import { TextStyles } from '../assets/styles';
import { HomeProps } from '../interfaces';

export const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Text style={TextStyles.title}>HomeScreen</Text>
    </View>
  );
};
