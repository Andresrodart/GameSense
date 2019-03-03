import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@vaadin/vaadin-charts/vaadin-chart.js';

const url = 'http://localhost:3000/users';
const arrCat = Array.apply(null, {length: 199}).map(Number.call, Number)
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
            <div main-title class="center Gamerinfo">GAME SENSE</div>
          </app-toolbar>
        </app-header>
        
        <div class="center" id="log">
            <div class="card">
                <div id="flag-image-container">
                    <iron-image sizing="contain" fade src="[[cImg]]" id="theImg"></iron-image>
                        <div id="answer-button-container">
                            <paper-input always-float-label label="Gamer" id="Gname"></paper-input>
                            <paper-input always-float-label label="Edad"  id="Gage" type="number"></paper-input>
                            <paper-input always-float-label label="Estatura"  id="Ghi" type="number" step="0.01"></paper-input>
                            <paper-input always-float-label label="Peso"  id="Gwe" type="number" step="0.01" placeholder="70.00"></paper-input>
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
                  <div id="flag-image-container" class="padd center">
                      <iron-image sizing="contain" fade src="[[cImg]]" id="gImage"></iron-image>
                  </div>
                </div>
                <div class="column_2 verSyn Gamerinfo">
                  <div class="">
                      <br>
                      <div id="Gamer">Nombre: [[outpuName]]</div>
                      <br>
                      <div id="Age">Edad: [[outputAge]]</div>
                  </div>
                </div>
              </div>  
              <div id="timer" class="center">
                <vaadin-chart type="area" title="What A gamer A Gamer feel" categories="[[categories]]" stacking="normal" no-legend tooltip>
                  <vaadin-chart-series title="Channel A" values="[[channelA]]" unit="Houndreds">
                  </vaadin-chart-series>
                  <vaadin-chart-series title="Channel B" values="[[channelB]]" unit="Houndreds">
                  </vaadin-chart-series>
                  <vaadin-chart-series title="Channel C" values="[[channelC]]" unit="Houndreds">
                  </vaadin-chart-series>
                </vaadin-chart>
            </div>
            <br>
            <paper-button class="another" id="another" on-click="_exit" >Exit</paper-button> 
          </div>
        </div>
        <iron-ajax
          id="ajax"
          url="[[url2]]"
          handle-as="text"
          on-response="_handleResponse"

        </iron-ajax>
      </app-header-layout>
    
    `;
  }
  static get properties() {
    return {
      darwi:{
        type: Boolean,
        value: false
      },
      categories:{
        type: Array,
        value: arrCat
      },
      channelA:{
        type: Array,
        value: []
      },
      channelB:{
        type: Array,
        value: []
      },
      channelC:{
        type: Array,
        value: []
      },
      url2: {
        type: String,
        value: "https://nervous-earwig-11.localtunnel.me/data"
      },
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
        value: ""
      },
      outputAge: {
        type: String,
        value: ""
      },
      outputHi: {
        type: String,
        value: ""
      },
      outputWe: {
        type: String,
        value: ""
      }
    };
  }
  connectedCallback(){
    super.connectedCallback();
    
    setInterval(() => {
      if (this.darwi)
      this.$.ajax.generateRequest();
        
    }, 3000);
  }
  _handleResponse(event){
    this.channelA = []
    this.channelC = []
    this.channelB = []
    var auxA = []
    var auxB = []
    var auxC = []
    var data_ = JSON.parse(event.detail.response);
    //console.log(data_['0'])
    for (const key in data_) {
      if (data_.hasOwnProperty(key)) {
        auxA.push(data_[key][0]);
        auxB.push(data_[key][1]);
        auxC.push(data_[key][2]);
      }
    }/**/
    this.channelA = auxA;
    this.channelB = auxB;
    this.channelC = auxC;
  }
  _selectAnswer(event) {
    let clickedButton = event.target;
    this.userAnswer = clickedButton.textContent;
    if (this.$.Gname.value != '' && this.$.Gage.value != '') {
      this.darwi = true;
      this.outpuName = this.$.Gname.value;
      this.outputAge = this.$.Gage.value;
      this.outputHi = this.$.Ghi.value;
      this.outputWe = this.$.Gwe.value;
      this.$.log.hidden = true;
      this.$.Gwork.hidden = false;
      var data = {"name":this.outpuName, "Age":this.outputAge, "Hi":this.outputHi, "We":this.outputWe}
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data),
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res)
      .catch(error => error)
      .then(response => console.log('Success:', response));
    }else{
      Swal.fire({
      title: 'Error!',
      text: 'Campos vacios',
      type: 'error',
      confirmButtonText: 'Cool'
      });
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
    this.darwi = false;
  }
  _handleAjaxPostError(event){
    console.log(event)
  }
}



window.customElements.define('game-sense-app', GameSenseApp);
