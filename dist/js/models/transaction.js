export class Transaction {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.amount * this.value;
    }
    toString() {
        return `
      Data: ${this.date}
      Quantidade: ${this.amount}
      Valor: ${this.value}
    `;
    }
    static create(date, amount, value) {
        const transaction = new Transaction(new Date(date.replace(/-/g, ',')), parseInt(amount), parseFloat(value));
        return transaction;
    }
}
