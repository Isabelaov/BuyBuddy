import { useEffect, useState } from 'react';
import { pieDataItem } from 'react-native-gifted-charts';
import { colorPalette } from '../assets/colors';
import { useItems } from './useItems';
import { CategoriesEnum } from '../enums/categories';

export const useStats = () => {
  const [data, setData] = useState<pieDataItem[]>([]);
  const { items, getCategoriesVals } = useItems();
  const [totalPercentage, setTotalPercentage] = useState(0);
  const categoriesArr: [] = Object.values(CategoriesEnum) as [];
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoriesValues = Object.values(getCategoriesVals());
    const filteredValues = categoriesValues.filter(item => item !== 0);

    const filterCategoriesArr = categoriesArr.filter(
      (c, i) => categoriesValues[i] > 0,
    );

    if (
      JSON.stringify(filterCategoriesArr) !== JSON.stringify(filteredCategories)
    ) {
      setFilteredCategories(filterCategoriesArr);
    }

    const baseData: pieDataItem[] = filteredValues.map((value, index) => ({
      value,
      color: colorPalette[index],
    }));

    const totalItems = Object.values(items).length;
    const itemsBought = Object.values(items).filter(item => item.bought).length;
    setTotalPercentage((itemsBought / totalItems) * 100);

    if (JSON.stringify(baseData) !== JSON.stringify(data)) {
      setData(baseData);
    }
  }, [items, getCategoriesVals, data, categoriesArr, filteredCategories]);

  return { data, totalPercentage, filteredCategories };
};
