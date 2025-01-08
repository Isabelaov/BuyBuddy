import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { CustomIcon } from './Icon';

export const StatsButton: React.FC<TouchableOpacityProps> = ({ ...rest }) => (
  <TouchableOpacity {...rest}>
    <CustomIcon name="stats-chart" family="Ionicons" />
  </TouchableOpacity>
);
