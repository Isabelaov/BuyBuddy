import { StyleSheet } from 'react-native';

export const ListStyles = (
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
) =>
  StyleSheet.create({
    list: {
      flex: 1,
      width: '100%',
      padding: 10,
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    itemBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent,
    },
  });
