//PATIENT ACTIVE STATUS
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@polymer/iron-ajax/iron-ajax.js';
class MyView2 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            if(e.detail.response.active = false)
            {
                e.target.parentNode.getElementById('active').checked = false;

            }
            else{
                e.target.parentNode.getElementById('active').checked = true;

            }
            // "e.detail.response.active" is check box status from server
            //"e.target.parentNode.getElementById('check')".checked is at the user side checkbox
        });
    }

    _render({}) {
        return html`
       <mwc-formfield alignEnd label="Active status:">
         <mwc-checkbox id="active"></mwc-checkbox>
         </mwc-formfield>
       <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/3629129"></iron-ajax>
       
    `;
    }
}

window.customElements.define('my-view2', MyView2);