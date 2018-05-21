//PATIENT IDENTIFIER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './fhir-period.js';

class MyView7 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function (e) {
            var i = 0;
            for (let identifier of e.detail.response.identifier) {
                if (i > 0) {
                    var child = e.target.parentNode.childNodes[1].cloneNode(true);
                    e.target.parentNode.appendChild(child);
                }
                e.target.parentNode.getElementById('identifier').label = e.detail.response.identifier[i].system;
                e.target.parentNode.getElementById('identifier').value = e.detail.response.identifier[i].value;
                e.target.parentNode.getElementById('select').value = e.detail.response.identifier[i].use;
                i++;
                console.log(e.target.parentNode.getElementById('system'))
            }
        });
    }

    _render({}) {
        return html`
<div>
    <label>Use</label>
    <select id="select">
        <option value="usual">Usual</option>
        <option value="official">Official</option>
        <option value="temp">Temporary</option>
        <option value="secondary">Secondary</option>
    </select><br>
    <mwc-textfield outlined id="identifier" label="system:"></mwc-textfield>
    <fhir-period></fhir-period>
</div>
<iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/81036"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view7', MyView7);
