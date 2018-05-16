//PATIENT MARITAL STATUS
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
//import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
//import '@polymer/paper-item/paper-item.js';
//import '@polymer/paper-listbox/paper-listbox.js';
//import '@polymer/iron-demo-helpers/demo-pages-shared-styles.js';
//import 'web-animations-js/web-animations-next-lite.min.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class MyView6 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){

            if((e.detail.response.maritalStatus === undefined) || (e.detail.response.maritalStatus = UNK))
            {
                e.target.parentNode.getElementById('unknown').checked = true;
            }
            else if(e.detail.response.maritalStatus = A)
                {
                    e.target.parentNode.getElementById('Annulled').checked = true;
            }
            else if(e.detail.response.maritalStatus = D)
            {
                e.target.parentNode.getElementById('divorced').checked = true;
            }
            else if(e.detail.response.maritalStatus = I)
            {
                e.target.parentNode.getElementById('interlocutory').checked = true;
            }
            else if(e.detail.response.maritalStatus = L)
            {
                e.target.parentNode.getElementById('legallyseparated').checked = true;
            }
            else if(e.detail.response.maritalStatus = M)
            {
                e.target.parentNode.getElementById('married').checked = true;
            }
            else if(e.detail.response.maritalStatus = P)
            {
                e.target.parentNode.getElementById('polygamous').checked = true;
            }
            else if(e.detail.response.maritalStatus = S)
            {
                e.target.parentNode.getElementById('nevermarried').checked = true;
            }
            else if(e.detail.response.maritalStatus = T)
            {
                e.target.parentNode.getElementById('domesticpartner').checked = true;
            }
            else if(e.detail.response.maritalStatus = U)
            {
                e.target.parentNode.getElementById('unmarried').checked = true;
            }
            else if(e.detail.response.maritalStatus = W)
            {
                e.target.parentNode.getElementById('widowed').checked = true;
            }
            //console.log(e.target.parentNode.getElementById('widowed').value);
        });
    }

    _render({}) {
        return html`
       <mwc-formfield label="Annulled"><mwc-radio id="annulled" value="A"></mwc-radio></mwc-formfield>
       <mwc-formfield label="Divorced"><mwc-radio id="divorced" value="D"></mwc-radio></mwc-formfield><br>
       <mwc-formfield label="Interlocutory"><mwc-radio id="interlocutory" value="I"></mwc-radio></mwc-formfield>            
       <mwc-formfield label="Legally Separated"><mwc-radio id="legallyseparated" value="L"></mwc-radio></mwc-formfield><br>
       <mwc-formfield label="Married"><mwc-radio id="married" value="M"></mwc-radio></mwc-formfield>
       <mwc-formfield label="Polygamous"><mwc-radio id="polygamous" value="P"></mwc-radio></mwc-formfield><br>
       <mwc-formfield label="Never Married"><mwc-radio id="nevermarried" value="S"></mwc-radio></mwc-formfield>             
       <mwc-formfield label="Domestic partner"><mwc-radio id="domesticpartner" value="T"></mwc-radio></mwc-formfield><br>
       <mwc-formfield label="unmarried"><mwc-radio id="unmarried" value="U"></mwc-radio></mwc-formfield>
       <mwc-formfield label="Widowed"><mwc-radio id="widowed" value="W"></mwc-radio></mwc-formfield><br>            
       <mwc-formfield label="Unknown"><mwc-radio id="unknown" value="UNK"></mwc-radio></mwc-formfield>
       <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax> 
    `;
    }
}
window.customElements.define('my-view6', MyView6);