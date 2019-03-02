import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-image/iron-image.js";
import "../../node_modules/@polymer/app-layout/app-layout.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
/**
 * @customElement
 * @polymer
 */

class GameSenseApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-header>
      <app-toolbar>
        <div main-title>Game Sense</div>
      </app-toolbar>
    </app-header>
    <div id="flag-image-container">
      <iron-image sizing="contain" fade src="data/dog.svg"></iron-image>
      <div id="answer-button-container">
        <paper-button id="optionA" class="answer">Chi</paper-button>
        <paper-button id="optionB" class="answer">Ño</paper-button>
      </div>
      <p>A message will go here, telling you if you got it right.</p>
      <paper-button class="another" id="another">Another!</paper-button> 
    </div>
    
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'game-sense-app'
      }
    };
  }

}

window.customElements.define('game-sense-app', GameSenseApp);