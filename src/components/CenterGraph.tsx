import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from '../assets/styles';

export const CenterGraph = (value: number) => (
  <>
    <Text style={TextStyles.graph}>{value}%</Text>
    <Text style={TextStyles.graph}>Completed</Text>
  </>
);
