//PATIENT SEARCH
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js'
import '@polymer/iron-ajax/iron-ajax.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';

class MyView13 extends LitElement {
    static get properties() {
        return {
            deceaseStatus: Boolean,
            periodField: Boolean,
            url: String,
            value: Object,
            index: Object
        }
    }

    constructor() {
        super();
        this.value = {};
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var items = [];
            for (let entry of e.detail.response.entry) {
                items.push({family : entry.resource.name[0].family});
            }
            e.target.parentNode.getElementById('table').items = items;

        });

    }

    _render({url, value}) {
        return html`
     <mwc-textfield outlined class="fName" on-input="${e => this.makeQuery(e.target._input.value)}" label="Search:"></mwc-textfield>
     <iron-ajax bubbles id="ajax" handle-as="json" url="http://test.fhir.org/r3/Patient"></iron-ajax>
     <vaadin-grid aria-label="Basic Binding Example" id="table">
     <vaadin-grid-column width="15em" flex-grow="0">
        <template class="header">Family Name</template>
        <template>[[item.family]]</template>
       
      </vaadin-grid-column>
`;
    }

    makeQuery(param) {
        this.shadowRoot.getElementById('ajax').params = {"name": param};
        this.shadowRoot.getElementById('ajax').generateRequest()
    }

}

window.customElements.define('my-view13', MyView13);
