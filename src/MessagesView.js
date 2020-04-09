import { LitElement, html, css } from 'lit-element';
import { messageStore } from '/src/store/MessageStore.js'

export class MessagesView extends LitElement {

  static get properties() {
    return {
      messageState: { type: Object }
    };
  }

  static get styles() {
    return css`
      :host {
      }
    `;
  }

  constructor() {
    super();
    messageStore.subscribe({
      next: (state) => this.messageState = state
    })
    messageStore.init();
  }

  clearMessages() {
    messageStore.clearMessages();
  }

  render() {
    return html`
      <h1>Messages lit-elem</h1>
      <button @click='${this.clearMessages}'>Clear Messages</button>

      <ul>
        ${
          this.messageState.data.map((data) => html`<li>From: ${data.from}, Message: ${data.msg}</li>`)
        }
      </ul>
    `;
  }
}
customElements.define('messages-view', MessagesView);