import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { ContainerStyles, TextStyles } from '../assets/styles';
import { CenterGraph, Indicator, Loading } from '../components';
import { useItems, useStats } from '../hooks';

export const StatsScreen = () => {
  const { data, totalPercentage, categories } = useStats();
  const { loading } = useItems();

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={ContainerStyles.mainContainer}>
      <Text style={TextStyles.title}>List Stats</Text>

      {data.length === 0 && categories ? (
        <Text style={TextStyles.error}>No data available</Text>
      ) : (
        <View style={ContainerStyles.chartContainer}>
          <PieChart
            radius={150}
            showValuesAsLabels
            data={data}
            donut
            centerLabelComponent={() => CenterGraph(totalPercentage)}
          />
          {data.map((val, index) => (
            <Indicator
              categories={Object.keys(categories!.filtered[index])}
              key={index}
              all={Object.values(categories!.all[index])}
              value={val.value}
              color={val.color!}
            />
          ))}
        </View>
      )}
    </View>
  );
};
