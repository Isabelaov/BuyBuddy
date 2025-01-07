import { useState } from 'react';
import { Alert } from 'react-native';
import { IIncomingItem } from '../interfaces/item';
import { useItems } from './useItems';
import { ItemModalProps } from '../interfaces/itemModalProps';
import { CategoriesEnum } from '../enums/categories';

export const useItemModal = ({
  setVisible,
  navigation,
  itemId,
  setItemId,
}: ItemModalProps) => {
  const [submitting, setSubmitting] = useState(false);
  const { loading, createItem, items, updateItem, deleteItem } = useItems();

  const initialValues: IIncomingItem = itemId
    ? { ...items[itemId] }
    : {
        category: undefined,
        name: '',
        quantity: '',
      };

  const handle = async (values: IIncomingItem) => {
    setSubmitting(true);
    try {
      if (itemId && itemId !== 0) {
        updateItem(itemId, values);
      } else {
        await createItem({
          category: values.category || CategoriesEnum.other,
          ...values,
        });
      }
    } catch (error: any) {
      Alert.alert('Error handling item', error);
    } finally {
      setSubmitting(false);
      setVisible(false);
      setItemId(undefined);
      navigation.replace('List');
    }
  };

  const handleDelete = async () => {
    try {
      deleteItem(itemId!);
      setItemId(undefined);
      navigation.replace('List');
    } catch (error: any) {
      Alert.alert('Error deleting item');
    }
  };

  return { submitting, loading, initialValues, handle, handleDelete };
};
