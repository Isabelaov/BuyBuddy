import { useState } from 'react';
import { HomeProps } from '../interfaces';

export const useHome = ({ navigation }: HomeProps) => {
  const [data, setData] = useState<{}>({});
};
