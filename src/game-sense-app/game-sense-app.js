import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
/**
 * @customElement
 * @polymer
 */
var imgs = ['data/dog.svg', 'data/cow.svg', 'data/pig.svg']
class GameSenseApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        
      </style>


      <app-header-layout class="bimg">
        <app-header reveals effects="waterfall" slot="header">
          <app-toolbar class="toolbar red">
            <div main-title class="center Gamerinfo">Game Sense</div>
          </app-toolbar>
        </app-header>
        
        <div class="center" id="log">
            <div class="card">
                <div id="flag-image-container">
                    <iron-image sizing="contain" fade src="[[cImg]]" id="theImg"></iron-image>
                        <div id="answer-button-container">
                            <paper-input always-float-label label="Gamer" id="Gname"></paper-input>
                            <paper-input always-float-label label="Edad"  id="Gage" type="number"></paper-input>
                            <paper-button id="optionA" class="answer" on-click="_selectAnswer">[[cA]]</paper-button>
                        </div>
                    <paper-button class="another" id="another" on-click="_changeImage">[[cB]]</paper-button> 
                </div>
            </div>
        </div>    
          <br>
          <br>
        <div class="padd" hidden="true" id="Gwork">
          <div class="board">
              <div class="row">
                <div class="column_2">
                  <div id="flag-image-container" class="padd">
                      <iron-image sizing="contain" fade src="[[cImg]]" id="gImage"></iron-image>
                  </div>
                </div>
                <div class="column_2 verSyn Gamerinfo">
                  <div class="">
                      <br>
                      <div id="Gamer">[[outpuName]]</div>
                      <br>
                      <div id="Age">[[outputAge]]</div>
                  </div>
                </div>
              </div>  
            <div id="answer-button-container">
              <paper-input always-float-label label="Gamer"></paper-input>
              <paper-input always-float-label label="Edad"></paper-input>
            </div>
            <br>
            <paper-button class="another" id="another" on-click="_exit" >Exit</paper-button> 
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
      },cImg: {
        type: String,
        value: imgs[Math.floor(Math.random() * 3)]
      },
      outpuName: {
        type: String,
        value: "Nombre: "
      },
      outputAge: {
        type: String,
        value: "Edad: "
      }
    };
  }
  _selectAnswer(event) {
    let clickedButton = event.target;
    this.userAnswer = clickedButton.textContent;
    if (this.$.Gname.value != '' && this.$.Gage.value != '') {
      this.outpuName += this.$.Gname.value;
      this.outputAge += this.$.Gage.value;
      this.$.log.hidden = true;
      this.$.Gwork.hidden = false;
    }else{
      Swal.fire({
      title: 'Error!',
      text: 'Campos vacios',
      type: 'error',
      confirmButtonText: 'Cool'
      })
    }
    //this.$.mein.style.padding = "";
  }
  _changeImage(event) {
    this.cImg = (imgs.indexOf(this.cImg) + 2 > imgs.length)? imgs[0] : imgs[imgs.indexOf(this.cImg) + 1]
    this.$.theImg.setAttribute('src', this.cImg)
    this.$.gImage.setAttribute('src', this.cImg)
  }

  _exit(event){
    this.$.Gname.value = '';
    this.$.Gage.value = '';
    this.$.Gwork.hidden = true;
    this.$.log.hidden = false;
  }
}

window.customElements.define('game-sense-app', GameSenseApp);
