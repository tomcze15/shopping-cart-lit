import { ProductId } from '@models/product/product_types';

export const ADD_PRODUCT_EVENT_NAME = 'addProductToListEvent';
export const DELETE_PRODUCT_EVENT_NAME = 'deleteProductEvent';
export const CHECK_ALL_PRODUCTS_EVENT_NAME = 'checkAllProductsEvent';
export const UNCHECK_ALL_PRODUCTS_EVENT_NAME = 'uncheckAllProductsEvent';

export interface AddProductEvent {
  name: string;
}

export interface DeleteProductEvent {
  id: ProductId;
}
