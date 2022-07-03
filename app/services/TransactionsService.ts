import { TransactionsApiResponse } from "../interfaces/TransactionsAPIResponse.js";
import { Transaction } from "../models/Transaction.js";

export class TransactionsService {
  public getTransactions(): Promise<Transaction[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => res.json())
      .then((transactions: TransactionsApiResponse[]) => {
        return transactions.map(transaction => {
          return new Transaction(
            new Date(),
            transaction.vezes,
            transaction.montante
          )
        });
      })
  }
}