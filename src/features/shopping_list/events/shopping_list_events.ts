import { ProductId } from '@models/product/product_types';

export const ADD_PRODUCT_EVENT_NAME = 'addProductToListEvent';
export const DELETE_PRODUCT_EVENT_NAME = 'deleteProductFromListEvent';

export interface AddProductEvent {
  name: string;
}

export interface DeleteProductEvent {
  id: ProductId;
}
