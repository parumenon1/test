//PATIENT IDENTIFIER
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './fhir-period.js';

class MyView7 extends LitElement {
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('response', function(e){
            for(let identifier of e.detail.response.identifier){
                var identifierField = document.createElement('mwc-textfield');
                identifierField.setAttribute('outlined', 'true');
                //TODO: low priority but verify system not null
                identifierField.setAttribute('label', 'id: ' + identifier.system);
                identifierField.value = identifier.value;

                //TODO: add type as a CodeableConcept element

                if(identifier.use != null) {
                    var useSelect = document.createElement('select');
                    var useOptions = {
                        0 : 'usual',
                        1 : 'official',
                        2 : 'temp',
                        3 : 'secondary'
                    };
                    for(let i in useOptions) {
                        if(useOptions[i] == identifier.use) {
                            useSelect.add(new Option(useOptions[i], i, true, true));
                        } else {
                            useSelect.add(new Option(useOptions[i], i));
                        }
                    }
                    e.target.parentNode.appendChild(useSelect);
                }
                e.target.parentNode.appendChild(identifierField);
                if(identifier.period != null) {
                    var periodField = document.createElement('fhir-period');
                    e.target.parentNode.appendChild(periodField);
                }
                var br = document.createElement('br');
                e.target.parentNode.appendChild(br);
            }
        });
    }

    _render({}) {
        return html`
     <iron-ajax id="ajax" auto handle-as="json" url="http://hapi.fhir.org/baseDstu3/Patient/81036"></iron-ajax>
    `;
    }
}

window.customElements.define('my-view7', MyView7);
