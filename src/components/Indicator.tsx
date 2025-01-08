import React from 'react';
import { View, Text } from 'react-native';
import { IndicatorStyles, TextStyles } from '../assets/styles';

export const Indicator = ({
  color,
  value,
  all,
  categories,
}: {
  color: string;
  value: number;
  all: number[];
  categories: string[];
}) => {
  return (
    <View style={IndicatorStyles(color).container}>
      <View style={IndicatorStyles(color).indicator} />
      <Text style={TextStyles.graphLabel}>{categories}</Text>
      <Text style={TextStyles.graphLabel}>
        {value} / {all}
      </Text>
    </View>
  );
};
