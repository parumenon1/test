//PATIENT NAME-!! CONVERT THE SELECT OPTION TO MWC FORMAT
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView1 extends LitElement {
    _didRender() {
        var child = e.target.parentNode;
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            if(e.detail.response.name != undefined) {
                e.target.parentNode.getElementById('firstname').value = e.detail.response.name[0].given;
                e.target.parentNode.getElementById('lastname').value = e.detail.response.name[0].family;
                //add what should prefix get get
            }

            if(e.detail.response.name == undefined)
            {
                child.removeChild(child.childNodes[6]);//prefix
                child.removeChild(child.childNodes[8]);//firstname
                child.removeChild(child.childNodes[10]);//lastname
                //remove use as well
            }
            if(e.detail.response.name[0].use != undefined)
            {
                var j =1;
                while(true)
                {
                    if(child.childNodes[1].nextElementSibling.childNodes[j].value == e.detail.response.name[0].use)
                    {
                        //select that option as per value??????
                        break;
                    }
                    j=j+2;
                }
            }

            //console.log(e.detail.response.name[0].use);
            //below is for select getting to value of type of child(select) 1st: go odd number wise to get next
            //console.log(e.target.parentNode.childNodes[1].nextElementSibling.childNodes[1].value);

        });
    }

    _render({}) {
        return html`
   
   <label>Use</label>
     <select>
         <option value="usual">Usual</option>
         <option value="official">Official</option>
         <option value="temp">Temporary</option>
         <option value="nick">Nickname</option>
         <option value="anonymous">Anonymous</option>
         <option value="old">Old</option>
         <option value="maiden">Maiden</option>
     </select><br>
    
     
     <select>
         <option value="mr">Mr</option>
         <option value="ms">Ms</option>
         <option value="mrs">Mrs</option>
         <option value="jr">Jr</option>
         <option value="sr">Sr</option>
     </select>
     <mwc-textfield outlined id="firstname" label="First Name:"></mwc-textfield>
     <mwc-textfield outlined id="lastname" label="Last Name:"></mwc-textfield>
     <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/2"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view1', MyView1);
