import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { translate as t } from 'lit-i18n';
import '@shared/components/basic_button';
import '@features/shopping_list/ui/components/product_list.ts';
import '@features/shopping_list/ui/components/input_add_product.ts';
import '@features/shopping_list/ui/components/actions_buttons.ts';

@customElement('shopping-list')
export class ShoppingList extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    .header {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }

    product-list {
      margin-bottom: 20px;
    }
  `;

  override render() {
    return html`
      <div class="header">${t('Shopping List')}</div>
      <input-add-product></input-add-product>
      <product-list></product-list>
      <actions-buttons></actions-buttons>
    `;
  }
}
