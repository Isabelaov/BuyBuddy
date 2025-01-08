import * as Yup from 'yup';
import { CategoriesEnum } from '../enums/categories';

export const createItemSchema = Yup.object().shape({
  name: Yup.string().required().nonNullable().min(1),
  quantity: Yup.number().required().positive().moreThan(0).integer(),
  category: Yup.mixed<CategoriesEnum>()
    .oneOf(Object.values(CategoriesEnum))
    .nullable(),
});
