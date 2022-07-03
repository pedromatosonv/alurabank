import { View } from "./View.js";

export class MessageView extends View<string> {

  protected template(message: string): string {
    return `
      <div class="alert alert-success" role="alert">
        ${message}
      </div>
    `;
  }
}