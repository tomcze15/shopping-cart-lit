import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('basic-button')
export class BasicButton extends LitElement {
  static override styles = css`
    .btn {
      padding: 3px 13px;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition:
        background-color 0.3s,
        color 0.3s;
      height: 3rem;
    }

    .btn--basic {
      background-color: #808080;
      color: white;
    }

    .btn--basic:hover,
    .btn--basic:focus {
      background-color: #2e2e2e;
    }

    .btn--basic:active {
      background-color: #000000;
    }

    .btn--error {
      background-color: #ff4d4f;
      color: white;
    }

    .btn--error:hover,
    .btn--error:focus {
      background-color: #cc0000;
    }

    .btn--error:active {
      background-color: #990000;
    }

    .btn--success {
      background-color: #4caf50;
      color: white;
    }

    .btn--success:hover,
    .btn--success:focus {
      background-color: #087f23;
    }

    .btn--success:active {
      background-color: #005f15;
    }
  `;

  @property()
  onClick?: (event?: MouseEvent) => void;

  @property({ type: String })
  type: 'basic' | 'error' | 'success' = 'basic';

  override render() {
    return html`<button
      class="btn btn--${this.type}"
      @click="${(event: MouseEvent) =>
        this.onClick ? this.onClick(event) : null}"
    >
      <slot></slot>
    </button>`;
  }
}
