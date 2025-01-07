import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/rootStack';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'List'>;

export interface IListProps {
  navigation: NavigationProp;
}
