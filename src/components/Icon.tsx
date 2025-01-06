import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IconProps } from 'react-native-vector-icons/Icon';
import { colors } from '../assets/colors';

export type CustomIconProps = IconProps & {
  family:
    | 'FontAwesome'
    | 'Ionicons'
    | 'MaterialIcons'
    | 'Entypo'
    | 'Feather'
    | 'AntDesign'
    | 'EvilIcons'
    | 'Fontisto'
    | 'Foundation'
    | 'MaterialCommunityIcons'
    | 'SimpleLineIcons'
    | 'Zocial'
    | 'FontAwesome6'
    | 'FontAwesome5';
  name: string;
};

export const CustomIcon = ({
  family,
  name,
  size = 24,
  color = colors.primary,
  ...rest
}: CustomIconProps) => {
  const IconComponent = {
    FontAwesome,
    Ionicons,
    MaterialIcons,
    Entypo,
    Feather,
    AntDesign,
    EvilIcons,
    Fontisto,
    Foundation,
    MaterialCommunityIcons,
    SimpleLineIcons,
    Zocial,
    FontAwesome6,
    FontAwesome5,
  }[family];

  if (!IconComponent) {
    console.error(`Invalid icon family ${family}`);
  }
  return <IconComponent name={name} size={size} color={color} {...rest} />;
};
