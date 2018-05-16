//PATIENT DATE OF BIRTH
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView5 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            e.target.parentNode.getElementById('date').value = e.detail.response.birthDate;

        });
    }
    _render({}) {
        return html`
       <mwc-formfield alignEnd label="Date of Birth:">
         <input id="date" type="date">
       </mwc-formfield>
       <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/3629128"></iron-ajax>
       
       
    `;
    }
}
window.customElements.define('my-view5', MyView5);