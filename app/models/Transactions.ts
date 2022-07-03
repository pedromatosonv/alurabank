import { Transaction } from "./Transaction.js";

export class Transactions {
  private transactions: Transaction[] = [];

  push(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  all(): readonly Transaction[] {
    return this.transactions;
  }
}