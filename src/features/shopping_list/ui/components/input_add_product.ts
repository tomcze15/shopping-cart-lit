import { customElement } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import ShoppingListEventEmitter from '../../../shopping_list/events/shopping_list_event_emitter';

@customElement('input-add-product')
export class InputAddProduct extends LitElement {
  override render() {
    return html`<input
      type="text"
      @keydown="${this._handleKeydown}"
      placeholder="nazwa produktu"
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
