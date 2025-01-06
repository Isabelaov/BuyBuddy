import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ContainerStyles, TextStyles } from '../assets/styles';
import { AddButton, CreateItemModal, Loading } from '../components';
import { colors } from '../assets/colors';
import { ButtonStyles } from '../assets/styles/Button.styles';
import { RootStackParams } from '../navigation/rootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useItems } from '../hooks/useItems';
import { IItem } from '../interfaces/item';
import { ModalStyles } from '../assets/styles/Modal.styles';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

const renderItem = ({ item }: { item: IItem }) => (
  <Text>{item.toString()}</Text>
);

export const HomeScreen = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { loading, items } = useItems();
  const data = Object.values(items);

  if (loading) {
    return (
      <View style={ContainerStyles.mainContainer}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={ModalStyles.containerWithModal}>
      <Text style={TextStyles.title}>HomeScreen</Text>

      <FlatList data={data} renderItem={renderItem} />

      <AddButton
        color={colors.primary}
        style={ButtonStyles('rgba(0,0,0,0.1)').addButton}
        onPress={() => setModalVisible(true)}
      />

      <CreateItemModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
};
