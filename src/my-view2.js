//PATIENT ACTIVE STATUS
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@polymer/iron-ajax/iron-ajax.js';
class MyView2 extends LitElement {
    _didRender() {
        
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            if(e.detail.response.active)
            {
                e.target.parentNode.getElementById('active').checked = true;
            }
            else if(!e.detail.response.active)
            {
                e.target.parentNode.getElementById('active').checked = false;
            }
            else
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }

        });
    }
    _render({}) {
        return html`
       <mwc-formfield alignEnd label="Active status:">
         <mwc-checkbox id="active" value="true"></mwc-checkbox>
         </mwc-formfield>
       <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax>
       
    `;
    }
}
window.customElements.define('my-view2', MyView2);