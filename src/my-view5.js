//PATIENT DATE OF BIRTH
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class MyView5 extends LitElement {
    static get properties() {
        return {
            birthDate: Boolean,
            url: String
        }
    }
    constructor() {
        super();
        this.birthDate = true;
    }
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function(e){
            if(e.detail.response.birthDate != undefined)
            {
                e.target.parentNode.getElementById('date').value = e.detail.response.birthDate;
            }
            else if(e.detail.response.birthDate == undefined)
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }

        });
    }
    _render({birthDate, url}) {
        return html`
       ${birthDate ? html`<mwc-formfield class="birthDate" alignEnd label="Date of Birth:">
         <input id="date" type="date">
       </mwc-formfield>` : ''}
       <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax>
       
       
    `;
    }
}
window.customElements.define('my-view5', MyView5);