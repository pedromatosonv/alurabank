export class MessageView {
    constructor(parentElementSelector) {
        this.parentElement = document.querySelector(parentElementSelector);
    }
    template(message) {
        return `
      <div class="alert alert-success" role="alert">
        ${message}
      </div>
    `;
    }
    render(message) {
        const template = this.template(message);
        this.parentElement.innerHTML = template;
    }
}
