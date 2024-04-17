import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './product_list';
import './input_add_product';

@customElement('shopping-list')
export class ShoppingList extends LitElement {
  constructor() {
    super();
  }

  override render() {
    return html`
      <input-add-product></input-add-product>
      <product-list></product-list>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-list': ShoppingList;
  }
}
