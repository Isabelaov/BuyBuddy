import { useEffect, useState } from 'react';
import { pieDataItem } from 'react-native-gifted-charts';
import { colorPalette } from '../assets/colors';
import { useItems } from './useItems';
import { CategoriesEnum } from '../enums/categories';

export const useStats = () => {
  const [data, setData] = useState<pieDataItem[]>([]);
  const { items, getAllCategories } = useItems();
  const [totalPercentage, setTotalPercentage] = useState(0);
  const categoriesArr: [] = Object.values(CategoriesEnum) as [];
  const [categories, setCategories] = useState<{
    all: { [key: string]: number }[];
    filtered: { [key: string]: number }[];
  }>();

  useEffect(() => {
    const categoriesValues = Object.values(getAllCategories(false));
    const allCategoriesValues = Object.values(getAllCategories(true));
    const filteredValues = categoriesValues.filter(item => item !== 0);
    const filterAllValues = allCategoriesValues.filter(item => item !== 0);

    const filterCategoriesArr = categoriesArr.filter(
      (c, i) => categoriesValues[i] > 0,
    );
    const filteredAllCategoriesArr = categoriesArr.filter(
      (c, i) => allCategoriesValues[i] > 0,
    );

    const mappedFiltered = filterCategoriesArr.map((c, i) => ({
      [c]: filteredValues[i],
    }));
    const mappedAll = filteredAllCategoriesArr.map((c, i) => ({
      [c]: filterAllValues[i],
    }));

    if (
      JSON.stringify(mappedFiltered) !== JSON.stringify(categories?.filtered)
    ) {
      setCategories(prev => ({
        all: prev?.all || [],
        filtered: mappedFiltered,
      }));
    }

    if (JSON.stringify(mappedAll) !== JSON.stringify(categories?.all)) {
      setCategories(prev => ({
        filtered: prev?.filtered || [],
        all: mappedAll,
      }));
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
  }, [items, data, categoriesArr, getAllCategories, categories]);

  return { data, totalPercentage, categories };
};
