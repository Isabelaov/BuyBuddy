import { StyleSheet } from 'react-native';

export const ButtonStyles = (backgroundColor: string) =>
  StyleSheet.create({
    button: {
      padding: 5,
      borderRadius: 10,
      width: '40%',
      margin: 15,
      alignSelf: 'center',
      backgroundColor,
    },
    addButton: {
      backgroundColor,
      padding: 10,
      borderRadius: 20,
      position: 'absolute',
      right: 15,
      bottom: 15,
    },
  });
