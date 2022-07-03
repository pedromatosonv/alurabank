import { Transactions } from "../models/Transactions.js";

export class TransactionsView {
  private parentElement: HTMLElement;

  constructor(parentElementSelector: string) {
    this.parentElement = document.querySelector(parentElementSelector);
  }

  template(transactions: Transactions): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${transactions.all().map(transaction => {
          return `
          <tr>
            <td>${new Intl.DateTimeFormat().format(transaction.date)}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.value}</td>
          </tr>
          `;
        }).join('')}
      </tbody>
    </table>
    `;
  }

  render(transactions: Transactions): void {
    const template = this.template(transactions);
    this.parentElement.innerHTML = template;
  }
}