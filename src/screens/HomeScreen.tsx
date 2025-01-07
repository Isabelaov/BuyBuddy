import { View, Text } from 'react-native';
import React from 'react';
import { TextStyles } from '../assets/styles';
import { HomeProps } from '../interfaces';
import { useHome } from '../hooks';
import { Button } from '../components';

export const HomeScreen = ({ navigation }: HomeProps) => {
  const {} = useHome({ navigation });

  return (
    <View>
      <Text style={TextStyles.title}>HomeScreen</Text>

      <Button text="Go to List" onPress={() => navigation.navigate('List')} />
    </View>
  );
};
