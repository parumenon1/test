//PATIENT LANG
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-switch/mwc-switch.js'
import '@polymer/iron-ajax/iron-ajax.js';
class MyView9 extends LitElement {
    static get properties() {
        return {
            langField: Boolean,
            prefField: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.langField = true;
        this.prefField = false;
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            if(e.detail.response.communication != undefined) {
                var i = 0;
                for (let identifier of e.detail.response.identifier) {
                    if (i > 0) {
                        var child = e.target.parentNode.childNodes[1].cloneNode(true);
                        e.target.parentNode.appendChild(child);
                    }
                    e.target.parentNode.querySelectorAll('.langField').value = e.detail.response.communication.language;
                    i++;
                    //can add receiving boolean value of preference if developer decides to use it
                }
            }
                else if(e.detail.response.communication == undefined)
               {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
               }
        });
    }

    _render({langField, prefField, url}) {
        return html`
     <div>
     ${langField ? html`<mwc-textfield outlined class="langField" label="Language"></mwc-textfield>` : ''}
     ${prefField ? html`<mwc-formfield alignEnd>Language preferred:<mwc-switch id ="pref" class="prefField" value="true"></mwc-switch></mwc-formfield>` : ''}
     </div>
     <iron-ajax id="ajax" auto handle-as="json" url="${url}"></iron-ajax>
     
    `;
    }
}

window.customElements.define('my-view9', MyView9);
