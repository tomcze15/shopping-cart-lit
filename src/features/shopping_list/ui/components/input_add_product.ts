import { customElement } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import { translate as t } from 'lit-i18n';
import ShoppingListEventEmitter from '@features/shopping_list/events/shopping_list_event_emitter';

@customElement('input-add-product')
export class InputAddProduct extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    input {
      padding: 8px 10px;
      font-size: 16px;
      border: 2px solid #ccc;
      border-radius: 8px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      transition:
        border-color 0.3s,
        box-shadow 0.3s;
    }

    input:focus {
      border-color: #0066cc;
      box-shadow:
        inset 0 1px 3px rgba(0, 0, 0, 0.2),
        0 0 5px rgba(0, 102, 204, 0.5);
      outline: none;
    }
  `;

  override render() {
    return html`<input
      type="text"
      @keydown="${this._handleKeydown}"
      placeholder="${t('Shopping List')}"
    />`;
  }

  private _handleEnter(value: string) {
    ShoppingListEventEmitter.emitAddProduct(value);
  }

  private _handleKeydown(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;

    event.preventDefault();

    const input = event.target as HTMLInputElement;
    this._handleEnter(input.value);
    input.value = '';
  }
}
