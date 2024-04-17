import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ShoppingListEventEmitter from '../../../shopping_list/events/shopping_list_event_emitter';
import { ProductId } from '../../../../models/product/product_types';

@customElement('product-list-item')
export class ProductListItem extends LitElement {
  @property({ type: String })
  name: string = '';

  @property({ type: Boolean })
  isChecked: boolean = false;

  @property({ type: String })
  productId: ProductId = '';

  static override styles = css`
    .product {
      cursor: pointer;
      padding: 10px;
      margin: 5px;
      border: 1px solid black;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `;

  constructor() {
    super();
  }

  private _onDeleteClick(event: Event): void {
    event.stopPropagation();
    ShoppingListEventEmitter.emitDeleteProduct(this.productId);
  }

  override render() {
    return html`
      <div>
        <li class="product">
          ${this.name} - ${this.isChecked ? 'Checked' : 'Unchecked'} -
          ${this.productId}
        </li>
        <button @click="${this._onDeleteClick}">Delete</button>
      </div>
    `;
  }
}
