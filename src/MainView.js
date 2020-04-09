import { LitElement, html, css } from 'lit-element'
import './HelloView'
import './MessagesView'

export class MainView extends LitElement {

  static get properties() {
    return {
      propName: { type: String }
    };
  }

  static get styles() {
    return css`
      section {
       display: flex;
       width: 100%;
       justify-content: space-around;
      }
    `
  }

  render() {
    return html`
    <section>
      <hello-view></hello-view> 
      <messages-view></messages-view> 
    </section>
    `;
  }
}
customElements.define('main-view', MainView);