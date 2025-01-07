import { useState } from 'react';
import { useItems } from '.';

export const useList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemId, setItemId] = useState<number>();
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
