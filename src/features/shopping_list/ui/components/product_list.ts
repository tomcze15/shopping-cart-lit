import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Subscription } from 'rxjs';
import { ProductsApi } from '@features/shopping_list/api/products_api';
import { ShoppingListInitializer } from '@features/shopping_list/shopping_list_initializer.ts';
import { Product } from '@models/product/product.ts';
import '@features/shopping_list/ui/components/product_list_item.ts';

@customElement('product-list')
export class Product_list extends LitElement {
  @property({ type: Array }) products: Product[] = [];

  private productsApi: ProductsApi;
  private productsSubscription?: Subscription;

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
    this.productsApi = new ProductsApi(new ShoppingListInitializer().init());
    this._subscribeToProducts();
  }

  private _subscribeToProducts() {
    this.productsSubscription = this.productsApi
      .selectProducts()
      .subscribe((products) => {
        this.products = products;
        this.requestUpdate();
      });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.productsSubscription?.unsubscribe();
  }

  private _handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const productId = target.getAttribute('data-key');

    if (!productId) return;

    this.productsApi.toggleProduct(productId);
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
