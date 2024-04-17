import {
  AddProductEvent,
  DeleteProductEvent,
  ADD_PRODUCT_EVENT_NAME,
  UNCHECK_ALL_PRODUCTS_EVENT_NAME,
  CHECK_ALL_PRODUCTS_EVENT_NAME,
  DELETE_PRODUCT_EVENT_NAME,
} from '../../shopping_list/events/shopping_list_events';
import { ProductId } from '../../../models/product/product_types';
import { EventEmitter } from '../../../shared/events/event_emitter';

class ShoppingListEventEmitter extends EventEmitter {
  emitAddProduct(productName: string) {
    this.emitEvent<AddProductEvent>(ADD_PRODUCT_EVENT_NAME, {
      name: productName,
    });
  }

  onAddProduct(callback: (productName: string) => void) {
    this.onEvent<AddProductEvent>(ADD_PRODUCT_EVENT_NAME, (data) =>
      callback(data.name)
    );
  }

  emitDeleteProduct(id: ProductId) {
    this.emitEvent<DeleteProductEvent>(DELETE_PRODUCT_EVENT_NAME, { id });
  }

  onDeleteProduct(callback: (productId: ProductId) => void) {
    this.onEvent<DeleteProductEvent>(DELETE_PRODUCT_EVENT_NAME, (data) =>
      callback(data.id)
    );
  }

  emitCheckAllProducts() {
    this.emitEvent(CHECK_ALL_PRODUCTS_EVENT_NAME);
  }

  onCheckAllProducts(callback: () => void) {
    this.onEvent<void>(CHECK_ALL_PRODUCTS_EVENT_NAME, () => callback());
  }

  emitUncheckAllProducts() {
    this.emitEvent(UNCHECK_ALL_PRODUCTS_EVENT_NAME);
  }

  onUncheckAllProducts(callback: () => void) {
    this.onEvent<void>(UNCHECK_ALL_PRODUCTS_EVENT_NAME, () => callback());
  }
}

export const shoppingListEventEmitter = new ShoppingListEventEmitter();

export default shoppingListEventEmitter;
