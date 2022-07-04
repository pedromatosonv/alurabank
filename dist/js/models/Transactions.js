export class Transactions {
    constructor() {
        this.transactions = [];
    }
    push(transaction) {
        this.transactions.push(transaction);
    }
    all() {
        return this.transactions;
    }
    toString() {
        return JSON.stringify(this.transactions, null, 2);
    }
}
