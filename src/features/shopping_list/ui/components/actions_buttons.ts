import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import ShoppingListEventEmitter from '@features/shopping_list/events/shopping_list_event_emitter';
import '@shared/components/basic_button';

@customElement('actions-buttons')
export class ActionsButtons extends LitElement {
  private _handleCheckAllProduct = () => {
    ShoppingListEventEmitter.emitCheckAllProducts();
  };

  private _handleUncheckAllProduct = () => {
    ShoppingListEventEmitter.emitUncheckAllProducts();
  };

  constructor() {
    super();
  }

  override render() {
    return html`
      <basic-button
        .type="${'success'}"
        .onClick="${this._handleCheckAllProduct}"
        ><span>Check All</span></basic-button
      >
      <basic-button .onClick="${this._handleUncheckAllProduct}"
        ><span>Uncheck All</span></basic-button
      >
    `;
  }
}
