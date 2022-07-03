import { Transaction } from "../models/Transaction.js";
export class TransactionsService {
    getTransactions() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((transactions) => {
            return transactions.map(transaction => {
                return new Transaction(new Date(), transaction.vezes, transaction.montante);
            });
        });
    }
}
