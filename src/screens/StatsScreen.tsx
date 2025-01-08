import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { ContainerStyles, IndicatorStyles, TextStyles } from '../assets/styles';
import { CenterGraph, Loading } from '../components';
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
            <Item
              categories={Object.keys(categories!.filtered[index])}
              key={index}
              all={Object.values(categories!.all[index])}
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
  all,
  categories,
}: {
  color: string;
  value: number;
  all: number[];
  index: number;
  categories: string[];
}) => {
  console.log(all[index], all, index);
  console.log(categories);

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
