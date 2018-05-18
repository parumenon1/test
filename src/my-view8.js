//PATIENT ADDRESS???label of date not showing up
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView8 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            if(e.detail.response.address != undefined)
            {

                //add options value for use and type; e.target.parentNode5,10 for use and type resp
                e.target.parentNode.getElementById('city').value =  e.detail.response.address[0].city;
                e.target.parentNode.getElementById('district').value = e.detail.response.address[0].district;
                e.target.parentNode.getElementById('sdate').value = e.detail.response.address[0].period.start;
                e.target.parentNode.getElementById('edate').value = e.detail.response.address[0].period.end;
                e.target.parentNode.getElementById('address1').value = e.detail.response.address[0].text;
                e.target.parentNode.getElementById('address2').value = e.detail.response.address[0].line;
            }
            else if(e.detail.response.address == undefined) {
                //remove all child nodes of e.target.parent

            }
        });
    }
    _render({}) {
        return html`
     <h1>ADDRESS1</h1> 
     <label>Use</label>
     <select>
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temporary</option>
         <option value="old">Old</option>
     </select><br>
     <label>Type</label>
     <select>
         <option value="home">Postal</option>
         <option value="work">Physical</option>
         <option value="temp">Both</option>
     </select><br>
     <mwc-textfield outlined id="address1" label="Address Line1:"></mwc-textfield><br>
     <mwc-textfield outlined id="address2" label="Address Line2:"></mwc-textfield><br>
     <mwc-textfield outlined id="city" label="City:"></mwc-textfield>
     <mwc-textfield outlined id="district" label="District:"></mwc-textfield><br>
     <mwc-formfield alignEnd label="start date:"><input id="sdate" type="date"></mwc-formfield>
     <mwc-formfield alignEnd label="end date:"><input id="edate" type="date"></mwc-formfield>
     <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/3709976"></iron-ajax>
    `;
    }
}
window.customElements.define('my-view8', MyView8);
