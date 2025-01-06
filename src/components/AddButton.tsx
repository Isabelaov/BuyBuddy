import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { CustomIcon } from './Icon';

type Props = TouchableOpacityProps & {
  color?: string;
};

export const AddButton: React.FC<Props> = ({
  disabled = false,
  color = 'white',
  ...rest
}) => {
  return (
    <TouchableOpacity disabled={disabled} {...rest}>
      <CustomIcon family="Ionicons" name="add" size={30} color={color} />
    </TouchableOpacity>
  );
};
