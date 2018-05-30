//PATIENT IDENTIFIER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './fhir-period.js';

class MyView7 extends LitElement {

    static get properties() {
        return {
            useField: Boolean,
            systemIdentifier: Boolean,
            identifierField: Boolean,
            periodField: Boolean,
            url: String
        }
    }

    constructor() {
        super();
        this.useField = true;
        this.systemIdentifier = true;
        this.identifierField = true;
        this.periodField = false;
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if(e.detail.response.identifier != undefined)
            {
             var i = 0;
             for (let identifier of e.detail.response.identifier) {
                if (i > 0) {
                    var child = e.target.parentNode.childNodes[1].cloneNode(true);
                    e.target.parentNode.appendChild(child);
                }
                e.target.parentNode.querySelectorAll('.useField')[i].value = e.detail.response.identifier[i].use;
                e.target.parentNode.querySelectorAll('.systemIdentifier')[i].value = e.detail.response.identifier[i].system;
                e.target.parentNode.querySelectorAll('.identifierField')[i].value = e.detail.response.identifier[i].value;
                i++;
             }
            }
            else if(e.detail.response.identifier == undefined)
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({useField, systemIdentifier, identifierField, periodField, url}) {
        return html`
<div>
<label>IDENTIFIER:</label>
    ${useField ? html`
    Use:<select class="useField">
        <option value="usual">Usual</option>
        <option value="official">Official</option>
        <option value="temp">Temporary</option>
        <option value="secondary">Secondary</option>
    </select>` : ''}
    ${systemIdentifier ? html`<mwc-textfield outlined class="systemIdentifier" label="System:"></mwc-textfield>` : ''}
    ${identifierField ? html`<mwc-textfield outlined class="identifierField" label="Identifier:"></mwc-textfield>` : ''}
    ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
</div>
<iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view7', MyView7);
