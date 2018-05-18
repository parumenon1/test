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
            if(e.detail.response.maritalStatus != undefined)
            {
            var i=0;
            while(true)
            {
                if(e.target.parentNode.querySelectorAll("mwc-radio")[i].value == e.detail.response.maritalStatus)
                {
                    e.target.parentNode.querySelectorAll("mwc-radio")[i].checked = true;
                    break;
                }
                i++;
            }
            }
            else if(e.detail.response.maritalStatus == undefined)
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[2]);
            }
        });
    }

    _render({}) {
        return html`
       <table class="tabletable-responsive">
       <form>
       <tr>
       <td><mwc-formfield label="Annulled"><mwc-radio id="annulled" value="A"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Divorced"><mwc-radio id="divorced" value="D"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Interlocutory"><mwc-radio id="interlocutory" value="I"></mwc-radio></mwc-formfield></td>          
       <td><mwc-formfield label="Legally Separated"><mwc-radio id="legallyseparated" value="L"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Widowed"><mwc-radio id="widowed" value="W"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Unmarried"><mwc-radio id="unmarried" value="U"></mwc-radio></mwc-formfield></td>
       </tr>
       <tr>
       <td><mwc-formfield label="Married"><mwc-radio id="married" value="M"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Polygamous"><mwc-radio id="polygamous" value="P"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Never Married"><mwc-radio id="nevermarried" value="S"></mwc-radio></mwc-formfield></td>             
       <td><mwc-formfield label="Domestic partner"><mwc-radio id="domesticpartner" value="T"></mwc-radio></mwc-formfield></td>
        <td><mwc-formfield label="Unknown"><mwc-radio id="unknown" value="UNK"></mwc-radio></mwc-formfield></td> 
       </tr>
       <tr>
       
      
       
       </tr> 
       
       <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax> 
       </form>
       </table>
    `;
    }
}
window.customElements.define('my-view6', MyView6);