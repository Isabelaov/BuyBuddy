import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/rootStack';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

export interface HomeProps {
  navigation: NavigationProp;
}
