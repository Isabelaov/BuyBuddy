import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { ContainerStyles, TextStyles } from '../assets/styles';
import { AddButton, CreateItemModal, Loading } from '../components';
import { colors } from '../assets/colors';
import { ButtonStyles } from '../assets/styles/Button.styles';
import { RootStackParams } from '../navigation/rootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useItems } from '../hooks/useItems';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

export const HomeScreen = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { loading } = useItems();

  if (loading) {
    return (
      <View style={ContainerStyles.mainContainer}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={ContainerStyles.containerWithModal}>
      <Text style={TextStyles.title}>HomeScreen</Text>

      <AddButton
        color={colors.primary}
        style={ButtonStyles('rgba(0,0,0,0.1)').addButton}
        onPress={() => setModalVisible(true)}
      />

      <CreateItemModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
};
