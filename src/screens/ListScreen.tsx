import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { ContainerStyles, ListStyles, TextStyles } from '../assets/styles';
import {
  AddButton,
  CreateItemModal,
  Loading,
  StatsButton,
} from '../components';
import { colors } from '../assets/colors';
import { ButtonStyles, ModalStyles } from '../assets/styles';
import { IItem, IListProps } from '../interfaces';
import { useList } from '../hooks';

export const ListScreen = ({ navigation }: IListProps) => {
  const {
    modalVisible,
    setModalVisible,
    itemId,
    setItemId,
    loading,
    data,
    handleCheckboxChange,
  } = useList();

  if (loading) {
    return (
      <View style={ContainerStyles.mainContainer}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={ModalStyles.containerWithModal}>
      <View style={ContainerStyles.bySide}>
        <Text style={TextStyles.title}>Items</Text>
        <StatsButton
          style={ContainerStyles.buttonEnd}
          onPress={() => navigation.navigate('Stats')}
        />
      </View>

      <FlatList
        style={ListStyles().list}
        data={data}
        renderItem={({ item }: { item: IItem }) => (
          <TouchableOpacity
            onPress={() => {
              setItemId(item.id);
              setModalVisible(true);
            }}
            style={ListStyles().item}>
            <View style={ListStyles('flex-start').itemBox}>
              <CheckBox
                value={item.bought || false}
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
        itemId={itemId}
        setItemId={setItemId}
      />
    </View>
  );
};
