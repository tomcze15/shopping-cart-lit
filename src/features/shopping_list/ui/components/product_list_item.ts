import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { translate as t } from 'lit-i18n';
import ShoppingListEventEmitter from '@features/shopping_list/events/shopping_list_event_emitter';
import { ProductId } from '@models/product/product_types';
import '@shared/components/basic_button';

@customElement('product-list-item')
export class ProductListItem extends LitElement {
  static override styles = css`
    .product-list-item__container {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 8px;
      background: #f5f5f5;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
      user-select: none;
    }

    .product-list-item__product {
      flex-grow: 1;
      margin-right: 10px;
      font-size: 1.2rem;
      transition:
        color 0.3s ease,
        text-decoration 0.3s ease;
    }

    .product-list-item__container--checked {
      text-decoration: line-through;
      color: #bbb;
      background-color: #e8e8e8;
    }
  `;

  @property({ type: String })
  name: string = '';

  @property({ type: Boolean })
  isChecked: boolean = false;

  @property({ type: String })
  productId: ProductId = '';

  private _onDeleteClick(event: Event): void {
    event.stopPropagation();
    ShoppingListEventEmitter.emitDeleteProduct(this.productId);
  }

  override render() {
    return html`
      <div
        class="product-list-item__container ${this.isChecked
          ? 'product-list-item__container--checked'
          : ''}"
      >
        <li class="product-list-item__product">${this.name}</li>
        <basic-button
          .type="${'error'}"
          .onClick="${(event: MouseEvent) => this._onDeleteClick(event)}"
          >${t('Delete')}</basic-button
        >
      </div>
    `;
  }
}
