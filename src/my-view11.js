//PATIENT CONTACT
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './fhir-period.js';
class MyView11 extends LitElement {
    static get properties() {
        return {
            useField: Boolean,
            systemField: Boolean,
            contNumb: Boolean,
            rankVal: Boolean,
            periodField: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.useField = true;
        this.systemField = true;
        this.contNumb = true;
        this.rankVal = true;
        this.periodField = false;
    }
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function(e){
            if(e.detail.response.telecom != undefined)
            {
                var i = 0;
                for (let telecom of e.detail.response.telecom) {
                    if (i > 0) {
                        var child = e.target.parentNode.childNodes[1].cloneNode(true);
                        e.target.parentNode.appendChild(child);
                    }
                    e.target.parentNode.querySelectorAll('.systemField')[i].value = e.detail.response.telecom[i].system;
                    e.target.parentNode.querySelectorAll('.useField')[i].value = e.detail.response.telecom[i].use;
                    e.target.parentNode.querySelectorAll('.contNumb')[i].value = e.detail.response.telecom[i].value;
                    e.target.parentNode.querySelectorAll('.rankVal')[i].value = e.detail.response.telecom[i].rank;
                    i++;
                }
            }
            else if(e.detail.response.telecom == undefined)
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }

        });
    }

    _render({systemField, useField, contNumb, rankVal, periodField, url}) {
        return html`
     <div>
     ${systemField ? html`
     system:<select class="systemField">
         <option value="phone">Phone</option>
         <option value="fax">Fax</option>
         <option value="email">Email</option>
         <option value="Pager">Pager</option>
         <option value="url">URL</option>
         <option value="sms">SMS</option>
         <option value="other">Other</option>` : ''}
     ${useField ? html`
     </select>
     use:<select class="useField">
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temp</option>
         <option value="home">Old</option>
         <option value="mobile">Mobile</option>
     </select>` : ''}
     ${contNumb ? html`<mwc-textfield outlined class="contNumb" id="contact" label="ContactNumber:"></mwc-textfield>` : ''}
     ${rankVal ? html`<mwc-textfield outlined class="rankVal" id="rank" label="Rank:"></mwc-textfield>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div>
         <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax>
`;
    }
}

window.customElements.define('my-view11', MyView11);
