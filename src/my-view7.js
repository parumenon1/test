//PATIENT IDENTIFIER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView7 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            e.target.parentNode.getElementById('identifier').value = e.detail.response.id;

        });
    }

    _render({}) {
        return html`
     <mwc-textfield outlined id="identifier" label="Patient ID:"></mwc-textfield>
     <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/3629128"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view7', MyView7);
