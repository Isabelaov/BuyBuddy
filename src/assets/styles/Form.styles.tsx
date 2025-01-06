import { StyleSheet } from 'react-native';
import { colors } from '../colors';

export const FormStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.primary,
  },
  input: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginVertical: 10,
    color: '#000',
  },
});
