import { StyleSheet } from 'react-native';

export const ContainerStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  chartContainer: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
  },
  formContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-between',
    margin: 10,
  },
  bySide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    width: '100%',
  },
  buttonEnd: {
    position: 'absolute',
    right: 5,
    top: 20,
  },
});
