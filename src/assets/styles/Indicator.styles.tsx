import { StyleSheet } from 'react-native';

export const IndicatorStyles = (backgroundColor: string) =>
  StyleSheet.create({
    indicator: {
      backgroundColor,
      width: 10,
      height: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
      marginHorizontal: 5,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 15,
    },
  });
