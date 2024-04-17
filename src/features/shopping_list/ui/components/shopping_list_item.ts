import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('shopping-list-item')
export class ShoppingListItem extends LitElement {
  @property({ type: String })
  name: string = '';

  @property({ type: Boolean })
  isChecked: boolean = false;

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

  override render() {
    return html`
      <li class="product">
        ${this.name} - ${this.isChecked ? 'Checked' : 'Unchecked'}
      </li>
    `;
  }
}
