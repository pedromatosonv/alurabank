import { WeekDays } from "../enums/WeekDays.js";
import { Transaction } from "../models/Transaction.js";
import { Transactions } from "../models/Transactions.js";
import { MessageView } from "../views/MessageView.js";
import { TransactionsView } from "../views/TransactionsView.js";

export class TransactionController {
  private transactions = new Transactions;
  private transactionsView = new TransactionsView('#transactionsView');
  private messageView = new MessageView('#messageView');
  private elDateInput: HTMLInputElement;
  private elAmountInput: HTMLInputElement;
  private elValueInput: HTMLInputElement;

  constructor() {
    this.elDateInput = document.querySelector('#data') as HTMLInputElement;
    this.elAmountInput = document.querySelector('#quantidade') as HTMLInputElement;
    this.elValueInput = document.querySelector('#valor') as HTMLInputElement;
    this.transactionsView.render(this.transactions);
  }

  add(): void {
    const transaction = Transaction.create(
      this.elDateInput.value,
      this.elAmountInput.value,
      this.elValueInput.value
    );

    if (this.isWeekend(transaction.date)) {
      this.messageView.render('Apenas transações em dias úteis são aceitas');
      return;
    }

    this.transactions.push(transaction);
    this.refreshView();
    this.resetForm();
  }

  private resetForm(): void {
    this.elDateInput.value = '';
    this.elAmountInput.value = '';
    this.elValueInput.value = '';
    this.elDateInput.focus();
  }

  private refreshView(): void {
    this.transactionsView.render(this.transactions);
    this.messageView.render('Negociação adicionada com sucesso!');
  }

  private isWeekend(date: Date): boolean {
    const weekDay = date.getDay();
    return weekDay === WeekDays.Sunday || weekDay === WeekDays.Saturday;
  }
}