//PATIENT ADDRESS
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView8 extends LitElement {


    _render({}) {
        return html`
     <h1>ADDRESS1</h1> 
     <mwc-textfield outlined id="address" label="Address:"></mwc-textfield>
     <mwc-textfield outlined id="Address" label="City:"></mwc-textfield>
     <mwc-textfield outlined id="Address" label="State:"></mwc-textfield>
     <mwc-textfield outlined id="Address" label="Country:"></mwc-textfield>
     <mwc-textfield outlined id="Address" label="Postal Code:"></mwc-textfield>
     <mwc-textfield outlined id="Address" label="Address:"></mwc-textfield>
     
     <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view8', MyView8);
