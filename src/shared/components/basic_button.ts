import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('basic-button')
export class BasicButton extends LitElement {
  static override styles = css`
    button {
      padding: 8px 16px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover,
    button:focus {
      background-color: #0056b3;
    }

    button:active {
      background-color: #00408b;
    }
  `;

  @property({ type: Function })
  onClick?: (event?: HTMLButtonElement) => void;

  override render() {
    return html`<button
      @click="${(event: MouseEvent) => {
        if (this.onClick) {
          this.onClick(event.currentTarget as HTMLButtonElement);
        }
      }}"
    >
      <slot></slot>
    </button>`;
  }
}
