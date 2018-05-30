//PATIENT RELATION
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView10 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function(e){
            if(e.detail.response.contact != undefined)
            {
                var i = 0;
                for (let contact of e.detail.response.contact) {
                    if (i > 0) {
                        var child = e.target.parentNode.childNodes[1].cloneNode(true);
                        e.target.parentNode.appendChild(child);
                    }
                    e.target.parentNode.querySelectorAll('.relationType')[i].value = e.detail.response.contact[0].relationship[0].coding[0].code;
                    i++;
                }
            }
            else if(e.detail.response.contact == undefined)
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({}) {
        return html`
    <div>
    <label>CONTACT DETAILS:</label><br> 
     Relation:<select class="relationType">
         <option value="BP">Billing Contact Person</option>
         <option value="C">Emergency Contact</option>
         <option value="CP">Contact Person</option>
         <option value="E">Employer</option>
         <option value="EP">Emergency Contact Person</option>
         <option value="F">Federal Agency</option>
         <option value="I">Insurance Company</option>
         <option value="N">Next-Of-Kin</option>
         <option value="O">Other</option>
         <option value="PR">Person Preparing Referral</option>
         <option value="S">State Agency</option>
         <option value="U">Unknown</option>
      </select>
      </div>   
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view10', MyView10);
