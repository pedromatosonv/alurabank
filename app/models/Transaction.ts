export class Transaction {
  constructor(
    private _date: Date,
    public readonly amount: number,
    public readonly value: number
  ) {}

  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }

  get volume(): number {
    return this.amount * this.value;
  }

  static create(date: string, amount: string, value: string): Transaction {
    const transaction = new Transaction(
      new Date(date.replace(/-/g, ',')),
      parseInt(amount),
      parseFloat(value)
    );

    return transaction;
  }
}