//PATIENT ADDRESS
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './fhir-period.js';
class MyView8 extends LitElement {
    static get properties() {
        return {
            useSelect: Boolean,
            typeSelect: Boolean,
            add1Field: Boolean,
            add2Field: Boolean,
            cityField: Boolean,
            districtField: Boolean,
            periodField: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.useSelect = true;
        this.typeSelect = true;
        this.add1Field = true;
        this.add2Field = true;
        this.cityField = true;
        this.districtField = true;
        this.periodField = false;
    }
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function(e){
            if(e.detail.response.address != undefined)
            {var i = 0;
                for (let address of e.detail.response.address) {
                    if (i > 0) {
                        var child = e.target.parentNode.childNodes[1].cloneNode(true);
                        e.target.parentNode.appendChild(child);
                    }
                    e.target.parentNode.querySelectorAll('.useSelect')[i].value =  e.detail.response.address[0].use;
                    e.target.parentNode.querySelectorAll('.typeSelect')[i].value = e.detail.response.address[0].type;
                    e.target.parentNode.querySelectorAll('.add1Field')[i].value = e.detail.response.address[0].text;
                    e.target.parentNode.querySelectorAll('.add2Field')[i].value = e.detail.response.address[0].line;
                    e.target.parentNode.querySelectorAll('.cityField')[i].value = e.detail.response.address[0].city;
                    e.target.parentNode.querySelectorAll('.districtField')[i].value = e.detail.response.address[0].district;
                    i++;
                }
            }
            else if(e.detail.response.address == undefined)
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }
    _render({useSelect, typeSelect, add1Field, add2Field, cityField, districtField, periodField, url}) {
        return html`
     <div> 
     ${useSelect ? html`
     Use:<select class="useSelect">
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temporary</option>
         <option value="old">Old</option>
     </select><br>` : ''}
     ${typeSelect ? html`
     Type:<select class="typeSelect">
         <option value="postal">Postal</option>
         <option value="physical">Physical</option>
         <option value="both">Both</option>
     </select><br>` : ''}
     ${add1Field ? html`<mwc-textfield outlined class="add1Field" id="address1" label="Address Line1:"></mwc-textfield><br>` : ''}
     ${add2Field ? html`<mwc-textfield outlined class="add2Field"  id="address2" label="Address Line2:"></mwc-textfield><br>` : ''}
     ${cityField ? html`<mwc-textfield outlined class="cityField" id="city" label="City:"></mwc-textfield>` : ''}
     ${districtField ? html`<mwc-textfield outlined class="districtField" id="district" label="District:"></mwc-textfield><br>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div>
         <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax>
`;
    }
}
window.customElements.define('my-view8', MyView8);
