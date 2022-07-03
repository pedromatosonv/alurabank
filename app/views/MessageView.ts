export class MessageView {
  private parentElement: HTMLElement;

  constructor(parentElementSelector: string) {
    this.parentElement = document.querySelector(parentElementSelector);
  }

  private template(message: string): string {
    return `
      <div class="alert alert-success" role="alert">
        ${message}
      </div>
    `;
  }

  render(message: string): void {
    const template = this.template(message);
    this.parentElement.innerHTML = template;
  }
}