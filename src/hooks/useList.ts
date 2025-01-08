import { useState } from 'react';
import { useItems } from '.';

export const useList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemId, setItemId] = useState<number>();
  const { loading, items, updateItem } = useItems();
  const base = Object.fromEntries(
    Object.values(items).map(item => [item.id, item.bought]),
  );

  const [selected, setSelected] = useState<{ [key: number]: boolean }>(base);
  const data = Object.values(items);

  const handleCheckboxChange = async (id: number) => {
    setSelected(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
    await updateItem(id, { bought: !items[id].bought });
  };

  return {
    modalVisible,
    setModalVisible,
    itemId,
    selected,
    setItemId,
    loading,
    data,
    handleCheckboxChange,
  };
};
