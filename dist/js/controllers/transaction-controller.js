import { Transaction } from "../models/transaction.js";
export class TransactionController {
    constructor() {
        this.elDateInput = document.querySelector('#data');
        this.elAmountInput = document.querySelector('#quantidade');
        this.elValueInput = document.querySelector('#valor');
    }
    create() {
        const date = new Date(this.elDateInput.value.replace(/-/g, ','));
        const transaction = new Transaction(date, parseInt(this.elAmountInput.value), parseFloat(this.elValueInput.value));
        this.resetForm();
        console.log(transaction);
    }
    resetForm() {
        this.elDateInput.value = '';
        this.elAmountInput.value = '';
        this.elValueInput.value = '';
        this.elDateInput.focus();
    }
}
