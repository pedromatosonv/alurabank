import { Transactions } from "../models/Transactions.js";
import { View } from "./View.js";

export class TransactionsView extends View<Transactions> {

  protected template(transactions: Transactions): string {
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
              <td>${this.formatDate(transaction.date)}</td>
              <td>${transaction.amount}</td>
              <td>${transaction.value}</td>
            </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}