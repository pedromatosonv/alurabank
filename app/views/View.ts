export abstract class View<T> {
  private elParentElement: HTMLElement;

  constructor(parentElementSelector: string) {
    this.elParentElement = document.querySelector(parentElementSelector);
  }

  render(data: T): void {
    const template = this.template(data);
    this.elParentElement.innerHTML = template;
  }

  protected abstract template(data: T): string
}