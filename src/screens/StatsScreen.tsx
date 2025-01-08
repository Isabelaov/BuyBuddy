import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { ContainerStyles, IndicatorStyles, TextStyles } from '../assets/styles';
import { CenterGraph, Loading } from '../components';
import { StatsProps } from '../interfaces';
import { useItems, useStats } from '../hooks';

export const StatsScreen = ({ navigation }: StatsProps) => {
  const { data, totalPercentage, filteredCategories } = useStats();
  const { loading } = useItems();

  console.log({ filteredCategories });

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
            centerLabelComponent={() => CenterGraph(totalPercentage)}
          />
          {data.map((val, index) => (
            <Item
              key={index}
              categories={filteredCategories}
              value={val.value}
              color={val.color!}
              index={index}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const Item = ({
  color,
  value,
  index,
  categories,
}: {
  color: string;
  value: number;
  index: number;
  categories: string[];
}) => {
  return (
    <View style={IndicatorStyles(color).container}>
      <View style={IndicatorStyles(color).indicator} />
      <Text style={TextStyles.graphLabel}>{categories[index]}/</Text>
      <Text style={TextStyles.graphLabel}>{value}</Text>
    </View>
  );
};
