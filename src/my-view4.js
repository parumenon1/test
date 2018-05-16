//PATIENT GENDER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class MyView4 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            if(e.detail.response.gender = 'female')
            {
                e.target.parentNode.getElementById('female').checked = true;

            }
            else if(e.detail.response.gender = 'male')
            {
                e.target.parentNode.getElementById('male').checked = true;

            }
            else if(e.detail.response.gender = 'other')
            {
                e.target.parentNode.getElementById('other').checked = true;


            }
            else if(e.detail.response.gender = 'unknown')
            {
                e.target.parentNode.getElementById('unknown').checked = true;

            }
            console.log(e.detail.response.gender.value);
        });
    }
    _render({}) {
        return html`
       <mwc-formfield label="Male"><mwc-radio id="male" value="male"></mwc-radio></mwc-formfield><br>
         <mwc-formfield label="Female"><mwc-radio id="female" value="female"></mwc-radio></mwc-formfield><br>
         <mwc-formfield label="Other"><mwc-radio id="other" value="other"></mwc-radio> </mwc-formfield> <br>            
         <mwc-formfield label="Unknown"><mwc-radio id="unknown" value="unknown"></mwc-radio></mwc-formfield>
       <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/3629128"></iron-ajax>
       
    `;
    }
}

window.customElements.define('my-view4', MyView4);