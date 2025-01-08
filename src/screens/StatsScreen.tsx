import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { ContainerStyles, TextStyles } from '../assets/styles';
import { Button, CenterGraph, Loading } from '../components';
import { StatsProps } from '../interfaces';
import { useItems, useStats } from '../hooks';

export const StatsScreen = ({ navigation }: StatsProps) => {
  const { data } = useStats();
  const { loading } = useItems();

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={ContainerStyles.mainContainer}>
      <Text style={TextStyles.title}>List Stats</Text>

      {data.length === 0 ? (
        <Text style={TextStyles.error}>No data available</Text>
      ) : (
        <View style={ContainerStyles.chartContainer}>
          <PieChart
            radius={150}
            showValuesAsLabels
            data={data}
            donut
            centerLabelComponent={CenterGraph}
          />
        </View>
      )}
    </View>
  );
};
