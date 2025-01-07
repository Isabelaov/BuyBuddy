import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { NativeSyntheticEvent, TargetedEvent, View } from 'react-native';
import { colors } from '../assets/colors';
import { PickerStyles } from '../assets/styles';
import { CategoriesEnum } from '../enums/categories';

type Props = {
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  selectedValue?: any;
  onValueChange?: (itemValue: any, itemIndex: number) => void;
};

export const CategoriesPicker = ({
  onBlur,
  selectedValue,
  onValueChange,
}: Props) => (
  <View style={PickerStyles.pickerContainer}>
    <Picker
      onBlur={onBlur}
      mode="dropdown"
      dropdownIconColor={colors.primary}
      style={PickerStyles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      <Picker.Item
        style={PickerStyles.pickerItem}
        key={'uwu'}
        label={'Select category'}
      />

      {Object.values(CategoriesEnum).map(category => (
        <Picker.Item
          style={PickerStyles.pickerItem}
          key={category}
          label={category}
          value={category}
        />
      ))}
    </Picker>
  </View>
);
