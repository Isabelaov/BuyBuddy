import { CategoriesEnum } from '../enums/categories';

export interface IIncomingItem {
  category?: CategoriesEnum;
  name: string;
  quantity: number | string;
}

export interface IItem {
  id: number;
  bought: boolean;
  category?: CategoriesEnum;
  name: string;
  quantity: number;
}
