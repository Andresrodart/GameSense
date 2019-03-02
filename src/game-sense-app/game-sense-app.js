import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
/**
 * @customElement
 * @polymer
 */
class GameSenseApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        
      </style>


      <app-header-layout>
        <app-header reveals effects="waterfall" slot="header">
          <app-toolbar class="toolbar red">
            <div main-title>Game Sense</div>
            <div class="tabs">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </app-toolbar>
        </app-header>
        
        <div class="center">
            <div class="card">
                <div id="flag-image-container">
                    <iron-image sizing="contain" fade src="data/dog.svg"></iron-image>
                        <div id="answer-button-container">
                            <paper-input always-float-label label="Gamer"></paper-input>
                            <paper-input always-float-label label="Edad"></paper-input>
                            <paper-button id="optionA" class="answer">Go</paper-button>
                        </div>
                    <paper-button class="another" id="another">Change image</paper-button> 
                </div>
            </div>
        </div>    
          <br>
          <br>
        <div class="padd">
          <div class="board">
              <div class="row">
                <div class="column_2">
                  <div id="flag-image-container" class="padd">
                      <iron-image sizing="contain" fade src="data/dog.svg"></iron-image>
                  </div>
                </div>
                <div class="column_2 verSyn Gamerinfo">
                  <div class="">
                      <br>
                      <div id="Gamer">Nombre</div>
                      <br>
                      <div id="Age">Edad</div>
                  </div>
                </div>
              </div>  
            <div id="answer-button-container">
              <paper-input always-float-label label="Gamer"></paper-input>
              <paper-input always-float-label label="Edad"></paper-input>
              <paper-button id="optionA" class="answer">Go</paper-button>
            </div>
            <paper-button class="another" id="another">Change image</paper-button> 
          </div>
        </div>
      </app-header-layout>
    
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
