import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';
import { TextStyles, ButtonStyles } from '../assets/styles';
import { Loading } from './Loading';
import { colors } from '../assets/colors';

type ButtonProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  backgroundPrimary?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  disabled = false,
  backgroundPrimary = true,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={
        ButtonStyles(backgroundPrimary ? colors.primary : colors.secondary)
          .button
      }
      disabled={disabled || isLoading}
      {...rest}>
      {isLoading ? (
        <Loading />
      ) : (
        <Text style={TextStyles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
