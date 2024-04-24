import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { akitaDevtools } from '@datorama/akita';
import '@features/shopping_list/ui/components/shopping_list.ts';
import { initI18n } from '@shared/i18n/i18n_initializer.ts';

@customElement('shopping-list-app')
export class ShoppingListApp extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 35px;
    }

    .container {
      width: 100%;
      max-width: 1200px;
    }
  `;

  constructor() {
    super();
    akitaDevtools();
    initI18n();
  }

  override render() {
    return html`<div class="container">
      <shopping-list></shopping-list>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-list-app': ShoppingListApp;
  }
}
