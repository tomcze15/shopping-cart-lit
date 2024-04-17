import {
  ADD_PRODUCT_EVENT_NAME,
  AddProductEvent,
  DELETE_PRODUCT_EVENT_NAME,
  DeleteProductEvent,
} from '../../shopping_list/events/shopping_list_events';
import { ProductId } from '../../../models/product/product_types';

class ShoppingListEventEmitter {
  private dispatcher: EventTarget;
  private addProductListener?: (event: Event) => void;
  private deleteProductListener?: (event: Event) => void;

  constructor() {
    this.dispatcher = document.createElement('div');
  }

  private _createAddProductEvent(
    productName: string
  ): CustomEvent<AddProductEvent> {
    return new CustomEvent<AddProductEvent>(ADD_PRODUCT_EVENT_NAME, {
      detail: { name: productName },
    });
  }

  private _createDeleteProductEvent(
    productId: ProductId
  ): CustomEvent<DeleteProductEvent> {
    return new CustomEvent<DeleteProductEvent>(DELETE_PRODUCT_EVENT_NAME, {
      detail: { id: productId },
    });
  }

  emitEventAddProduct(productName: string) {
    const event = this._createAddProductEvent(productName);
    this.dispatcher.dispatchEvent(event);
  }

  onAddProduct(callback: (productName: string) => void) {
    this.addProductListener = (event: Event) => {
      const customEvent = event as CustomEvent<AddProductEvent>;
      callback(customEvent.detail.name);
    };

    this.dispatcher.addEventListener(
      ADD_PRODUCT_EVENT_NAME,
      this.addProductListener
    );
  }

  emitDeleteProduct(id: ProductId) {
    const event = this._createDeleteProductEvent(id);
    this.dispatcher.dispatchEvent(event);
  }

  onDeleteProduct(callback: (productId: ProductId) => void) {
    this.deleteProductListener = (event: Event) => {
      const customEvent = event as CustomEvent<DeleteProductEvent>;
      callback(customEvent.detail.id);
    };
    this.dispatcher.addEventListener(
      DELETE_PRODUCT_EVENT_NAME,
      this.deleteProductListener
    );
  }

  clearAll() {
    if (this.addProductListener) {
      this.dispatcher.removeEventListener(
        ADD_PRODUCT_EVENT_NAME,
        this.addProductListener
      );
    }

    if (this.deleteProductListener) {
      this.dispatcher.removeEventListener(
        DELETE_PRODUCT_EVENT_NAME,
        this.deleteProductListener
      );
    }
  }
}

export const shoppingListEventEmitter = new ShoppingListEventEmitter();

export default shoppingListEventEmitter;
