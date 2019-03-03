import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-image/iron-image.js";
import "../../node_modules/@polymer/app-layout/app-layout.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-input/paper-input.js";
import Swal from "../../node_modules/sweetalert2/dist/sweetalert2.all.js";
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
            <div main-title class="center Gamerinfo">Game Sense</div>
          </app-toolbar>
        </app-header>
        
        <div class="center" id="log">
            <div class="card">
                <div id="flag-image-container">
                    <iron-image sizing="contain" fade src="data/dog.svg"></iron-image>
                        <div id="answer-button-container">
                            <paper-input always-float-label label="Gamer" id="Gname"></paper-input>
                            <paper-input always-float-label label="Edad"  id="Gage" ></paper-input>
                            <paper-button id="optionA" class="answer" on-click="_selectAnswer">[[cA]]</paper-button>
                        </div>
                    <paper-button class="another" id="another">[[cB]]</paper-button> 
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
                      <div id="Gamer">[[outpuName]]</div>
                      <br>
                      <div id="Age">[[outputAges]]</div>
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
      cA: {
        type: String,
        value: "Go!"
      },
      cB: {
        type: String,
        value: "Iu image"
      },
      outpuName: {
        type: String,
        value: ""
      },
      outputAge: {
        type: String,
        value: ""
      }
    };
  }

  _selectAnswer(event) {
    let clickedButton = event.target;
    this.userAnswer = clickedButton.textContent;

    if (this.$.Gname.value != '' && this.$.Gage.value != '') {
      this.outpuName = this.$.Gname.value;
      this.outputAge = this.$.Gage.value;
      this.$.log.hidden = true;
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Campos vacios',
        type: 'error',
        confirmButtonText: 'Cool'
      });
    } //this.$.mein.style.padding = "";

  }

}

window.customElements.define('game-sense-app', GameSenseApp);