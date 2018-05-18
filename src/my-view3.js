//PATIENT DECEASED STATUS--what about datetime of deceased????
import {LitElement, html} from '@polymer/lit-element/lit-element.js';

import '@material/mwc-checkbox/mwc-checkbox.js'
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';

class MyView3 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            if(true)
            {
                if (e.detail.response.deceasedBoolean) {
                    e.target.parentNode.getElementById('decease').checked = true;
                }
                else if (!e.detail.response.deceasedBoolean) {
                    e.target.parentNode.getElementById('decease').checked = false;
                }
                else {
                    e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
                    e.target.parentNode.removeChild(e.target.parentNode.childNodes[3]);
                }
            }
            if (e.detail.response.deceasedDateTime != undefined)
            {
                e.detail.response.deceasedDateTime = e.target.parentNode.getElementById('date');
            }
            else{
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[3]);
            }

            // "e.detail.response.active" is check box status from server
            //"e.target.parentNode.getElementById('check')".checked is at the user side checkbox
        });
    }

    _render({}) {
        return html`
      <mwc-formfield alignEnd label="Deceased status:">
         <mwc-checkbox id="decease" value = "true"></mwc-checkbox>
      </mwc-formfield> 
      <mwc-formfield alignEnd label="Deceased date:">
         <input id="date" type="datetime-local">
       </mwc-formfield>      
      <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax> 
       
    `;
    }
}

window.customElements.define('my-view3', MyView3);
