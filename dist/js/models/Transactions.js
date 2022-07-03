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
}
