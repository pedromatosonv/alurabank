import { View } from "./View.js";
export class TransactionsView extends View {
    template(transactions) {
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
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
