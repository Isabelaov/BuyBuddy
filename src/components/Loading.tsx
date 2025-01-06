import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../assets/colors';

type LoadingProps = {
  color?: string;
  size?: 'large' | 'small';
};

export const Loading: React.FC<LoadingProps> = ({
  color = colors.primary,
  size = 'large',
}) => {
  return <ActivityIndicator size={size} color={color} />;
};
