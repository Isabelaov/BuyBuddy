import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/rootStack';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Stats'>;

export interface StatsProps {
  navigation: NavigationProp;
}
