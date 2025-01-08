import { useEffect, useState } from 'react';
import { pieDataItem } from 'react-native-gifted-charts';
import { colorPalette } from '../assets/colors';
import { useItems } from './useItems';
import { CategoriesEnum } from '../enums/categories';

export const useStats = () => {
  const [data, setData] = useState<pieDataItem[]>([]);
  const { items, getCategoriesVals } = useItems();

  useEffect(() => {
    const categoriesValues = Object.values(getCategoriesVals());
    const filteredValues = categoriesValues.filter(item => item !== 0);

    const categoriesArr: [] = Object.values(CategoriesEnum) as [];
    const filteredCategories = categoriesArr.filter(
      (c, i) => categoriesArr[i] > 0,
    );

    const baseData: pieDataItem[] = filteredValues.map((value, index) => ({
      value,
      color: colorPalette[index],
    }));
    console.log({ baseData });

    if (JSON.stringify(baseData) !== JSON.stringify(data)) {
      setData(baseData);
    }
  }, [items, getCategoriesVals, data]);

  return { data };
};
