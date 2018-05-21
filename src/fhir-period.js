//PATIENT IDENTIFIER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class FhirPeriod extends LitElement {
    _render({}) {
        return html`
     Start:<input type="datetime-local" />
     End:<input type="datetime-local" />
    `;
    }
}

window.customElements.define('fhir-period', FhirPeriod);
