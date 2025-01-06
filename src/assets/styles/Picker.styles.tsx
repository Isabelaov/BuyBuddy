import { StyleSheet } from 'react-native';
import { colors } from '../colors';

export const PickerStyles = StyleSheet.create({
  pickerContainer: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    padding: 0,
    marginVertical: 10,
    overflow: 'hidden',
  },
  picker: {
    padding: 0,
    color: 'black',
  },
  pickerItem: {
    backgroundColor: '#D3D3D3',
    color: 'black',
  },
});
