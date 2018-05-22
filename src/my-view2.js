//PATIENT ACTIVE STATUS
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@polymer/iron-ajax/iron-ajax.js';

class MyView2 extends LitElement {
    static get properties() {
        return {
            activeStatus: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.activeStatus = true;

    }

    _didRender() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.active != undefined) {
                if (e.detail.response.active) {
                    e.target.parentNode.querySelectorAll('.active').checked = true;
                }
                else (!e.detail.response.active)
                {
                    e.target.parentNode.querySelectorAll('.active').checked = false;
                }
            }
            else if (e.detail.response.active == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }

        });
    }

    _render({activeStatus, url}) {
        return html`
       <div>
       ${activeStatus ? html`<mwc-formfield class="activeStatus" alignEnd label="Active status:">
         <mwc-checkbox class="active" value="true"></mwc-checkbox>
         </mwc-formfield>` : ''}
       <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax>
       </div>
       
    `;
    }
}

window.customElements.define('my-view2', MyView2);