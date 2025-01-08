import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { IIncomingItem, IItem } from '../interfaces/item';
import { CategoriesEnum } from '../enums/categories';

type ItemsType = {
  [key: string]: IItem;
};

export const useItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ItemsType>({});

  useEffect(() => {
    loadItems();
  }, []);

  const getAllCategories = (isAll: boolean) => {
    return Object.fromEntries(
      Object.values(CategoriesEnum).map(key => [
        key,
        getTotalCount(key, isAll),
      ]),
    );
  };

  const getTotalCount = (category: CategoriesEnum, isAll: boolean) => {
    let count = 0;

    Object.values(items).map(val => {
      if (
        (isAll && val.category === category) ||
        (!isAll && val.category === category && val.bought)
      ) {
        count++;
      }
    });

    return count;
  };

  const createItem = async ({ ...data }: IIncomingItem) => {
    try {
      setLoading(true);
      const newItem = {
        ...data,
        id: Date.now(),
        bought: false,
        category: data.category ? data.category : CategoriesEnum.other,
      };
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
      await AsyncStorage.setItem('@items', JSON.stringify(values));
      await loadItems();
    } catch (error) {
      console.error('failed to save: ', error);
    }
  };

  const loadItems = async () => {
    try {
      setLoading(true);
      const res = await AsyncStorage.getItem('@items');

      if (res) {
        const parsed = JSON.parse(res);
        setItems(parsed);
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

  const updateItem = async (id: number, data: Partial<IItem>) => {
    setLoading(true);
    try {
      const updatedItems: ItemsType = {
        ...items,
        [id]: { ...items[id], ...data },
      };

      setItems(updatedItems);
      await saveItems(updatedItems);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      setLoading(true);
      const {
        [id]: {},
        ...filtered
      } = items;

      setItems(filtered);
      await saveItems(filtered);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    createItem,
    loadItems,
    getOneItem,
    updateItem,
    deleteItem,
    loading,
    items,
    getAllCategories,
  };
};
