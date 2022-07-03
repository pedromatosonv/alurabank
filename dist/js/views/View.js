export class View {
    constructor(parentElementSelector) {
        this.elParentElement = document.querySelector(parentElementSelector);
    }
    render(data) {
        const template = this.template(data);
        this.elParentElement.innerHTML = template;
    }
}
