import { useState } from 'react';
import { HomeProps } from '../interfaces';
import { CategoriesEnum } from '../enums/categories';

export const useHome = ({ navigation }: HomeProps) => {
  const baseData = Object.fromEntries(
    Object.values(CategoriesEnum).map(key => [key, 0]),
  );

  console.log({ baseData });

  const [data, setData] = useState<{}>({});

  return {};
};
