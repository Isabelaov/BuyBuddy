import { StyleSheet } from 'react-native';
import { colors } from '../colors';

export const ContainerStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerWithModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '90%',
    padding: 5,
    marginHorizontal: '5%',
  },
  modalContent: {
    backgroundColor: 'white',
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
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
  },
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
