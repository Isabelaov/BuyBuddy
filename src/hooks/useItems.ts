import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { IItem } from '../interfaces/item';

type ItemsType = {
  [key: string]: IItem;
};

export const useItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ItemsType>({});

  // useEffect(() => {
  //   loadItems();
  // });

  const createItem = ({ ...data }: Omit<IItem, 'id'>) => {
    try {
      setLoading(true);
      const newItem = { ...data, id: Date.now() };
      setItems(prevItems => ({ ...prevItems, [newItem.id]: newItem }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadItems = async () => {
    try {
      setLoading(true);
      const res = await AsyncStorage.getItem('@items');
      if (res) {
        setItems(JSON.parse(res));
      }
      saveItems();
    } catch (error) {
      console.error(`Unable to parse data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const saveItems = async () => {
    try {
      setLoading(true);
      await AsyncStorage.setItem('@items', JSON.stringify(items));
    } catch (error) {
      console.error('failed to save: ', error);
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

  return { createItem, loadItems, getOneItem, updateItem, deleteItem, loading };
};
