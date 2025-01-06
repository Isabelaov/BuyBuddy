import { CategoriesEnum } from '../enums/categories';

export interface IItem {
  id: number;
  category?: CategoriesEnum;
  name: string;
  quantity: number;
  bought: boolean;
}
