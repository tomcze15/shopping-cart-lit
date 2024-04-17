import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './product_list';
import './input_add_product';
import './actions_buttons';
import '../../../../shared/components/basic_button';

import { akitaDevtools } from '@datorama/akita';
akitaDevtools();

@customElement('shopping-list')
export class ShoppingList extends LitElement {
  static override styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background-color: #ffffff;
    }

    .header {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }

    .actions-container {
      padding: 13px 0 0 0;
    }
  `;

  override render() {
    return html`
      <div class="header">Shopping List</div>
      <input-add-product></input-add-product>
      <product-list></product-list>
      <div class="actions-container">
        <actions-buttons></actions-buttons>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-list': ShoppingList;
  }
}
