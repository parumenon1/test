//PATIENT NAME
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import './fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView1 extends LitElement {
    static get properties() {
        return {
            useField: Boolean,
            suffixField: Boolean,
            fName: Boolean,
            lName: Boolean,
            periodField: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.useField = true;
        this.suffixField = true;
        this.fName = true;
        this.lName = true;
        this.periodField = false;
    }
    _didRender() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function(e){
            var i = 0;
            for (let val of e.detail.response.name) {
                if (i > 0) {
                    var child = e.target.parentNode.childNodes[1].cloneNode(true);
                    e.target.parentNode.appendChild(child);
                }
                e.target.parentNode.querySelectorAll('.useField')[i].value = e.detail.response.name[i].use;
                e.target.parentNode.querySelectorAll('.suffixField')[i].value = e.detail.response.name[i].suffix;
                e.target.parentNode.querySelectorAll('.fName')[i].value = e.detail.response.name[i].given;
                e.target.parentNode.querySelectorAll('.lName')[i].value = e.detail.response.name[i].family;
                i++;
            }
        });

    }

    _render({useField, suffixField, fName, lName, periodField, url}) {
        return html`
   <div>  
   ${useField ? html`
     <label>Use:</label>
     <select class="useField">
         <option value="usual">Usual</option>
         <option value="official">Official</option>
         <option value="temp">Temporary</option>
         <option value="nickname">Nickname</option>
         <option value="anonymous">Anonymous</option>
         <option value="old">Old</option>
         <option value="maiden">Maiden</option>
     </select>` : ''}
      ${suffixField ? html`
     <select class="suffixField">
         <option value="mr">Mr</option>
         <option value="ms">Ms</option>
         <option value="mrs">Mrs</option>
         <option value="Junior">Jr</option>
         <option value="Senior">Sr</option>
     </select>` : ''}
     ${fName ? html`<mwc-textfield outlined class="fName" id="firstname" label="First Name:"></mwc-textfield>` : ''}
     ${lName ? html`<mwc-textfield outlined class="lName" id="lastname" label="Last Name:"></mwc-textfield>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div> 
     <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view1', MyView1);
