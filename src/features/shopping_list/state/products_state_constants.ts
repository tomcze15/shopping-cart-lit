import { v4 as uuidv4 } from 'uuid';
import { IProductState } from '../../shopping_list/state/products_state_types';
import { Product } from '../../../models/product/product';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: uuidv4(),
    name: 'Apple',
    isChecked: true,
  },
  {
    id: uuidv4(),
    name: 'Banana',
    isChecked: false,
  },
  {
    id: uuidv4(),
    name: 'Table',
    isChecked: true,
  },
  {
    id: uuidv4(),
    name: 'Potatoes',
    isChecked: true,
  },
  {
    id: uuidv4(),
    name: 'Onions',
    isChecked: true,
  },
  {
    id: uuidv4(),
    name: 'Milk',
    isChecked: false,
  },
] as const;

export const INITIAL_PRODUCTS_STATE: IProductState = {
  ids: INITIAL_PRODUCTS.map((product) => product.id),
  entities: INITIAL_PRODUCTS.reduce(
    (acc, product) => {
      acc[product.id] = product;
      return acc;
    },
    {} as { [id: string]: Product }
  ),
};
