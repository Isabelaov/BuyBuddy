import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ModalProps } from 'react-native';
import { RootStackParams } from '../navigation/rootStack';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'List'>;

export type ItemModalProps = ModalProps & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: NavigationProp;
  itemId: number | undefined | null;
  setItemId: React.Dispatch<React.SetStateAction<number | undefined>>;
};
