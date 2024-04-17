import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ProductsApi } from '../../../shopping_list/api/products_api';
import { ShoppingListInitializer } from '../../../shopping_list/shopping_list_initializer';
import { Product } from '../../../../models/product/product';
import './shopping_list_item';
import { Subscription } from 'rxjs';

@customElement('shopping-list')
export class ShoppingList extends LitElement {
  @property({ type: Array }) products: Product[] = [];

  private _productsApi: ProductsApi;
  private subscription?: Subscription;

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
    this.products = this._productsApi.getAllProducts();
    this.subscribeToProducts();
  }

  private subscribeToProducts() {
    this.subscription = this._productsApi
      .selectProducts()
      .subscribe((products) => {
        this.products = products;
        this.requestUpdate();
      });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.subscription?.unsubscribe();
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
            html`<shopping-list-item
              data-key="${product.id}"
              .key="${product.id}"
              .name="${product.name}"
              .isChecked="${product.isChecked}"
            />`
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-list': ShoppingList;
  }
}
