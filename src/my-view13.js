/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-patient-search>` adds search to your page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-patient-search url=""></fhir-patient-search>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-patient-search.html
 *
 */

import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js'
import '@polymer/iron-ajax/iron-ajax.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';

class MyView13 extends LitElement {
    static undefinedToBlank(obj) {
        if (obj == undefined) {
            return '';
        }
        else {
            return obj;
        }
    }
    static get properties() {
        return {
            deceaseStatus: Boolean,
            periodField: Boolean,
            url: String,
            value: Object,
            index: Object,
            patientUrl: String
        }
    }

    constructor() {
        super();
        this.value = {};
      
    }
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var grid = e.target.parentNode.getElementById('table');

            var items = [];
            for (let entry of e.detail.response.entry) {
                items.push({id : entry.resource.id, family : entry.resource.name[0].family, given : entry.resource.name[0].given[0], gender : FhirPatientSearch.undefinedToBlank(entry.resource.gender), active: FhirPatientSearch.undefinedToBlank(entry.resource.active)});
            }
            e.target.parentNode.getElementById('table').items = items;

            console.log(grid)

        });

    }

    _render({url, value, patientUrl}) {
        return html`
     <mwc-textfield outlined id="searchField" on-input="${e => this.makeQuery(e.target._input.value)}" label="Search"></mwc-textfield>
     <iron-ajax bubbles id="ajax" handle-as="json" url="http://test.fhir.org/r3/Patient"></iron-ajax>
     <vaadin-grid aria-label="Patient Names" id="table">
     <vaadin-grid-column width="50px" flex="0">
        <template class="header">Identifier</template>
        <template><a href="${patientUrl}">[[item.id]]</a></template>
     </vaadin-grid-column>
     <vaadin-grid-column>
        <template class="header">Last Name</template>
        <template>[[item.family]]</template>
      </vaadin-grid-column>
     <vaadin-grid-column>
        <template class="header">First Name</template>
        <template>[[item.given]]</template>
      </vaadin-grid-column>
      <vaadin-grid-column>
        <template class="header">Gender</template>
        <template>[[item.gender]]</template>
      </vaadin-grid-column>
      <vaadin-grid-column>
        <template class="header">Active Status</template>
        <template>[[item.active]]</template>
      </vaadin-grid-column>
      </vaadin-grid>
`;
    }
    makeQuery(param) {
        if(param.length > 2) {
            this.shadowRoot.getElementById('ajax').params = {"name": param};
            this.shadowRoot.getElementById('ajax').generateRequest()
        }
    }


}

window.customElements.define('my-view13', MyView13);
