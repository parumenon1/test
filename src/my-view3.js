//PATIENT DECEASED STATUS
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './fhir-period.js';

class MyView3 extends LitElement {
    static get properties() {
        return {
            deceaseStatus: Boolean,
            periodField: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.deceaseStatus = true;
        this.periodField = false;
    }
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.deceasedBoolean) {
                e.target.parentNode.getElementById('decease').checked = true;
            }
            else (!e.detail.response.deceasedBoolean)
            {
                e.target.parentNode.getElementById('decease').checked = false;
            }

        });
    }

    _render({deceaseStatus, periodField, url}) {
        return html`
      ${deceaseStatus ? html`<mwc-formfield class="deceaseStatus" alignEnd label="Deceased status:">
         <mwc-checkbox id="decease" value = "true"></mwc-checkbox>
      </mwc-formfield>` : ''}
      ${periodField ? html`<fhir-period class="periodField"></fhir-period>`: ''}     
          <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax> 
        
`;
    }
}

window.customElements.define('my-view3', MyView3);
