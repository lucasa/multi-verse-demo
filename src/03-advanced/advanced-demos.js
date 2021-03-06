import { LitElement, html, css } from 'lit-element';
// import './01-demo-dashboard.js';

class AdvancedDemos extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }

        a {
          text-decoration: none;
        }

        .demo > *:not(h2):not(a) {
          display: block;
          border: 1px solid	#e2e2e2;
          border-radius: 5px;
          padding: 8px;
          margin: 8px 0;
          line-height: 32px;
        }

        paper-card { 
          border-radius: 5px;
          flex: 1; 
          padding: 12px;
          margin: 0 0 32px 0;
        }

        h2 {
          font-size: 20px;
          color: #2c3e50;
        }

        h2:hover::after { 
          color: #9B35FA;
          content: " #";
        }

        h1 {
          margin-top: 0px;
          color: #9B35FA;
        }
      `,
    ];
  }


  render() {
    return html`
      <paper-card>
        <div class="demo">
          <a href="https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F01-property-setter-observer.js" target="_blank"><h2>01 Property setter observer</h2></a>
          <div>
          <p>Use of multi-verse in a dashboard. Click on chart or map item to filter dataset</p>
          <home-map></home-map></div>
        </div>
      </paper-card>

     
    `;
  }
}

customElements.define('advanced-demos', AdvancedDemos);