import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ContainerStyles, ListStyles, TextStyles } from '../assets/styles';
import { AddButton, CreateItemModal, Loading } from '../components';
import { colors } from '../assets/colors';
import { ButtonStyles } from '../assets/styles/Button.styles';
import { RootStackParams } from '../navigation/rootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useItems } from '../hooks/useItems';
import { IItem } from '../interfaces/item';
import { ModalStyles } from '../assets/styles/Modal.styles';
import CheckBox from '@react-native-community/checkbox';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

export const HomeScreen = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});
  const { loading, items, updateItem } = useItems();
  const data = Object.values(items);

  const handleCheckboxChange = (id: number) => {
    setSelected(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
    updateItem(id, { bought: selected[id] });
  };

  if (loading) {
    return (
      <View style={ContainerStyles.mainContainer}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={ModalStyles.containerWithModal}>
      <Text style={TextStyles.title}>Items</Text>

      <FlatList
        style={ListStyles().list}
        data={data}
        renderItem={({ item }: { item: IItem }) => (
          <TouchableOpacity style={ListStyles().item}>
            <View style={ListStyles('flex-start').itemBox}>
              <CheckBox
                value={!selected[item.id]}
                onValueChange={() => handleCheckboxChange(item.id)}
                tintColors={{ true: colors.primary, false: colors.secondary }}
              />
              <Text style={TextStyles.normal}>{item.name}</Text>
            </View>

            <View style={ListStyles('space-between').itemBox}>
              <Text style={TextStyles.normal}>x{item.quantity}</Text>
              <Text style={TextStyles.normal}>{item.category || 'Other'}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <AddButton
        color={colors.primary}
        style={ButtonStyles('rgba(0,0,0,0.1)').addButton}
        onPress={() => setModalVisible(true)}
      />

      <CreateItemModal
        navigation={navigation}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </View>
  );
};
