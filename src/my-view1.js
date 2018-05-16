//PATIENT NAME
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView1 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            e.target.parentNode.getElementById('firstname').value = e.detail.response.name[0].given;
            e.target.parentNode.getElementById('lastname').value = e.detail.response.name[0].family;
        });
    }

    _render({}) {
        return html`
     <mwc-textfield outlined id="firstname" label="First Name:"></mwc-textfield>
     <mwc-textfield outlined id="lastname" label="Last Name:"></mwc-textfield>
     <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view1', MyView1);
