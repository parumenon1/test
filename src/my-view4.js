//PATIENT GENDER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class MyView4 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            var i=0;
            while(true)
            {
                if(e.target.parentNode.querySelectorAll("mwc-radio")[i].value == e.detail.response.gender)
                {
                    e.target.parentNode.querySelectorAll("mwc-radio")[i].checked = true;
                    break;
                }
                i++;
            }
            if(e.detail.response.gender == undefined)
            {
                var child = e.target.parentNode.querySelectorAll("mwc-radio");
                e.target.parentNode.removeChild(child);

            }

        });
    }
    _render({}) {
        return html`
       <mwc-formfield label="Male"><mwc-radio name="gender" id="male" value="male"></mwc-radio></mwc-formfield><br>
         <mwc-formfield label="Female"><mwc-radio name="gender" id="female" value="female"></mwc-radio></mwc-formfield><br>
         <mwc-formfield label="Other"><mwc-radio name="gender" id="other" value="other"></mwc-radio> </mwc-formfield> <br>            
         <mwc-formfield label="Unknown"><mwc-radio name="gender" id="unknown" value="unknown"></mwc-radio></mwc-formfield>
       <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/3665782"></iron-ajax>
       
    `;
    }
}

window.customElements.define('my-view4', MyView4);