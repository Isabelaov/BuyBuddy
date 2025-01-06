import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { colors } from '../assets/colors';

export const createScreenOptions = (
  title: string,
): NativeStackNavigationOptions => ({
  title,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: colors.primary,
  },
  headerStyle: {
    backgroundColor: '#fff',
  },
});
