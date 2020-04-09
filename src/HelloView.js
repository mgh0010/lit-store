import { LitElement, html } from 'lit-element';
import { messageStore } from '/src/store/MessageStore.js'

export class HelloView extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      messageState: { type: Object }
    };
  }

  constructor() {
    super();
    this.name = 'World';
    messageStore.subscribe({
      next: (state) => this.messageState = state
    })
    messageStore.init();
    console.log(this.messageState);
  }

  sendMessage() {
    messageStore.sendMessage({
      from: 'michael',
      msg: 'hello!'
    });
    console.log(this.messageState)
  }

  render() {
    return html`
      <!-- <h1>Hey ${this.name}!</h1> -->
      <h1>Hello  lit-elem</h1>
      <button @click='${this.sendMessage}'>add data</button>

      <ul>
        ${
          this.messageState.data.map((data) => html`<li>From: ${data.from}, Message: ${data.msg}</li>`)
        }
      </ul>
    `;
  }
}
customElements.define('hello-view', HelloView);