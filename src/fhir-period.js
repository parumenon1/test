//PATIENT IDENTIFIER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class FhirPeriod extends LitElement {
    _render({}) {
        return html`
     <input type="datetime-local" label="start" />
     <input type="datetime-local" label="end" />
    `;
    }
}

window.customElements.define('fhir-period', FhirPeriod);
