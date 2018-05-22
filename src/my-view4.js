//PATIENT GENDER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class MyView4 extends LitElement {
    static get properties() {
        return {
            genderVal: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.genderVal = true;

    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var i = 0;
            while (true) {
                if (e.target.parentNode.querySelectorAll("mwc-radio")[i].value == e.detail.response.gender) {
                    e.target.parentNode.querySelectorAll("mwc-radio")[i].checked = true;
                    break;
                }
                i++;
            }
        });
    }

    _render({genderVal, url}) {
        return html`
       ${genderVal ? html`
       <div class="genderVal">
         <mwc-formfield label="Male"><mwc-radio name="gender" id="male" value="male"></mwc-radio></mwc-formfield><br>
         <mwc-formfield label="Female"><mwc-radio name="gender" id="female" value="female"></mwc-radio></mwc-formfield><br>
         <mwc-formfield label="Other"><mwc-radio name="gender" id="other" value="other"></mwc-radio> </mwc-formfield> <br>            
         <mwc-formfield label="Unknown"><mwc-radio name="gender" id="unknown" value="unknown"></mwc-radio></mwc-formfield>
       </div>` : ''}
       <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax>
       
    `;
    }
}

window.customElements.define('my-view4', MyView4);