import { Transaction } from "../models/Transaction.js";
import { Transactions } from "../models/Transactions.js";
import { TransactionsView } from "../views/TransactionsView.js";

export class TransactionController {
  private transactions = new Transactions;
  private transactionsView = new TransactionsView('#transactionsView');
  private elDateInput: HTMLInputElement;
  private elAmountInput: HTMLInputElement;
  private elValueInput: HTMLInputElement;

  constructor() {
    this.elDateInput = document.querySelector('#data');
    this.elAmountInput = document.querySelector('#quantidade');
    this.elValueInput = document.querySelector('#valor');
    this.transactionsView.render(this.transactions);
  }

  add(): void {
    const transaction = this.create();
    this.transactions.push(transaction);
    this.transactionsView.render(this.transactions);
    this.resetForm();
  }

  create(): Transaction {
    const date = new Date(this.elDateInput.value.replace(/-/g, ','));

    const transaction = new Transaction(
      date,
      parseInt(this.elAmountInput.value),
      parseFloat(this.elValueInput.value)
    );

    return transaction;
  }

  resetForm(): void {
    this.elDateInput.value = '';
    this.elAmountInput.value = '';
    this.elValueInput.value = '';
    this.elDateInput.focus();
  }
}