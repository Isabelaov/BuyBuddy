import { CategoriesEnum } from '../enums/categories';

export interface IIncomingItem {
  category?: CategoriesEnum;
  name: string;
  quantity: number | string;
}

export interface IItem extends IIncomingItem {
  id: number;
  bought: boolean;
}
