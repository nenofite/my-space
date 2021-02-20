class MarginNote extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name');
        const isSide = this.getAttribute('margin') == null;

        this.innerHTML =
            `<label for="${name}" class="margin-toggle ${isSide ? 'sidenote-number' : ''}"
        >${isSide ? '' : '&#8853;'}</label>
        <input type="checkbox" id="${name}" class="margin-toggle"/>
        <span class="${isSide ? 'sidenote' : 'marginnote'}">
            ${this.innerHTML}
        </span>`;
    }
}

customElements.define('side-note', MarginNote);