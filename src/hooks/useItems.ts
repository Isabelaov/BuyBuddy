import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { IIncomingItem, IItem } from '../interfaces/item';

type ItemsType = {
  [key: string]: IItem;
};

export const useItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ItemsType>({});

  useEffect(() => {
    loadItems();
  }, []);

  const createItem = async ({ ...data }: IIncomingItem) => {
    try {
      setLoading(true);
      const newItem = { ...data, id: Date.now(), bought: false };
      const updatedItems = {
        ...items,
        [newItem.id]: newItem,
      };

      setItems(updatedItems);

      await saveItems(updatedItems);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const saveItems = async (values: ItemsType) => {
    try {
      console.log({ values });

      await AsyncStorage.setItem('@items', JSON.stringify(values));
    } catch (error) {
      console.error('failed to save: ', error);
    }
  };

  const loadItems = async () => {
    try {
      setLoading(true);
      const res = await AsyncStorage.getItem('@items');

      if (res) {
        setItems(JSON.parse(res));
      }
    } catch (error) {
      console.error(`Unable to parse data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const getOneItem = (id: number) => {
    return items[id] ? items[id] : null;
  };

  const updateItem = (id: number) => {
    console.log(id);
  };

  const deleteItem = (id: number) => {
    console.log(id);
  };

  return {
    createItem,
    loadItems,
    getOneItem,
    updateItem,
    deleteItem,
    loading,
    items,
  };
};
