import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TextStyles } from '../assets/styles';
import { Loading } from './Loading';

type AnchorProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Anchor: React.FC<AnchorProps> = ({
  text,
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <Loading size="small" />
      ) : (
        <Text style={TextStyles.anchorText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
