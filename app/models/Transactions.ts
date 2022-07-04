import { Printable } from "../interfaces/Printable.js";
import { Transaction } from "./Transaction.js";

export class Transactions implements Printable {
  private transactions: Transaction[] = [];

  push(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  all(): readonly Transaction[] {
    return this.transactions;
  }

  toString(): string {
      return JSON.stringify(this.transactions, null, 2);
  }
}