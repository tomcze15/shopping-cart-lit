import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('basic-button')
export class BasicButton extends LitElement {
  static override styles = css`
    .button {
      padding: 3px 13px;
      font-size: 13px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition:
        background-color 0.3s,
        color 0.3s;
    }

    .button--basic {
      background-color: #808080;
      color: white;
    }

    .button--basic:hover,
    .button--basic:focus {
      background-color: #2e2e2e;
    }

    .button--basic:active {
      background-color: #000000;
    }

    .button--error {
      background-color: #ff4d4f;
      color: white;
    }

    .button--error:hover,
    .button--error:focus {
      background-color: #cc0000;
    }

    .button--error:active {
      background-color: #990000;
    }

    .button--success {
      background-color: #4caf50;
      color: white;
    }

    .button--success:hover,
    .button--success:focus {
      background-color: #087f23;
    }

    .button--success:active {
      background-color: #005f15;
    }
  `;

  @property({ type: Function })
  onClick?: (event?: MouseEvent) => void;

  @property({ type: String })
  type: 'basic' | 'error' | 'success' = 'basic';

  override render() {
    return html`<button
      class="button button--${this.type}"
      @click="${(event: MouseEvent) =>
        this.onClick ? this.onClick(event) : null}"
    >
      <slot></slot>
    </button>`;
  }
}
