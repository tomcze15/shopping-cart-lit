import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Subscription } from 'rxjs';
import { ProductsApi } from '@features/shopping_list/api/products_api';
import { ShoppingListInitializer } from '@features/shopping_list/shopping_list_initializer.ts';
import { Product } from '@models/product/product.ts';
import ShoppingListEventEmitter from '@features/shopping_list/events/shopping_list_event_emitter';
import '@features/shopping_list/ui/components/product_list_item.ts';

@customElement('product-list')
export class Product_list extends LitElement {
  @property({ type: Array }) products: Product[] = [];

  private _productsApi: ProductsApi;
  private _productsSubscription?: Subscription;

  static override styles = css`
    .product-list {
      list-style: none;
      padding: 0;
    }

    .product {
      padding: 10px;
      margin: 5px;
      border: 1px solid black;
    }
  `;

  constructor() {
    super();
    this._productsApi = new ProductsApi(new ShoppingListInitializer().init());
    this._subscribeToProducts();

    ShoppingListEventEmitter.onAddProduct((productName) => {
      this._productsApi.addProduct(productName);
    });

    ShoppingListEventEmitter.onDeleteProduct((productId) => {
      this._productsApi.removeProduct(productId);
    });

    ShoppingListEventEmitter.onCheckAllProducts(() =>
      this._productsApi.checkAllProducts()
    );

    ShoppingListEventEmitter.onUncheckAllProducts(() =>
      this._productsApi.uncheckAllProducts()
    );
  }

  private _subscribeToProducts() {
    this._productsSubscription = this._productsApi
      .selectProducts()
      .subscribe((products) => {
        this.products = products;
        this.requestUpdate();
      });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._productsSubscription?.unsubscribe();
  }

  private _handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const productId = target.getAttribute('data-key');

    if (!productId) return;

    this._productsApi.toggleProduct(productId);
  }

  override render() {
    return html`
      <ul class="product-list" @click="${this._handleClick}">
        ${this.products.map(
          (product) =>
            html` <product-list-item
              data-key="${product.id}"
              .productId="${product.id}"
              .name="${product.name}"
              .isChecked="${product.isChecked}"
            />`
        )}
      </ul>
    `;
  }
}
