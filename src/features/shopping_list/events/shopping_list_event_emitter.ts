import {
  AddProductEvent,
  DeleteProductEvent,
  ADD_PRODUCT_EVENT_NAME,
  UNCHECK_ALL_PRODUCTS_EVENT_NAME,
  CHECK_ALL_PRODUCTS_EVENT_NAME,
  DELETE_PRODUCT_EVENT_NAME,
} from '@features/shopping_list/events/shopping_list_events';
import { ProductId } from '@models/product/product_types';
import { EventEmitter } from '@shared/events/event_emitter';

class ShoppingListEventEmitter extends EventEmitter {
  public emitAddProduct(productName: string) {
    this.emitEvent<AddProductEvent>(ADD_PRODUCT_EVENT_NAME, {
      name: productName,
    });
  }

  public onAddProduct(callback: (productName: string) => void) {
    this.onEvent<AddProductEvent>(ADD_PRODUCT_EVENT_NAME, (data) =>
      callback(data.name)
    );
  }

  public emitDeleteProduct(id: ProductId) {
    this.emitEvent<DeleteProductEvent>(DELETE_PRODUCT_EVENT_NAME, { id });
  }

  public onDeleteProduct(callback: (productId: ProductId) => void) {
    this.onEvent<DeleteProductEvent>(DELETE_PRODUCT_EVENT_NAME, (data) =>
      callback(data.id)
    );
  }

  public emitCheckAllProducts() {
    this.emitEvent(CHECK_ALL_PRODUCTS_EVENT_NAME);
  }

  public onCheckAllProducts(callback: () => void) {
    this.onEvent<void>(CHECK_ALL_PRODUCTS_EVENT_NAME, () => callback());
  }

  public emitUncheckAllProducts() {
    this.emitEvent(UNCHECK_ALL_PRODUCTS_EVENT_NAME);
  }

  public onUncheckAllProducts(callback: () => void) {
    this.onEvent<void>(UNCHECK_ALL_PRODUCTS_EVENT_NAME, () => callback());
  }
}

export const shoppingListEventEmitter = new ShoppingListEventEmitter();

export default shoppingListEventEmitter;
