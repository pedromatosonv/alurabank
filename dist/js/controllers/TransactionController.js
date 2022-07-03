import { WeekDays } from "../enums/WeekDays.js";
import { Transaction } from "../models/Transaction.js";
import { Transactions } from "../models/Transactions.js";
import { MessageView } from "../views/MessageView.js";
import { TransactionsView } from "../views/TransactionsView.js";
export class TransactionController {
    constructor() {
        this.transactions = new Transactions;
        this.transactionsView = new TransactionsView('#transactionsView');
        this.messageView = new MessageView('#messageView');
        this.elDateInput = document.querySelector('#data');
        this.elAmountInput = document.querySelector('#quantidade');
        this.elValueInput = document.querySelector('#valor');
        this.transactionsView.render(this.transactions);
    }
    add() {
        const transaction = Transaction.create(this.elDateInput.value, this.elAmountInput.value, this.elValueInput.value);
        if (this.isWeekend(transaction.date)) {
            this.messageView.render('Apenas transações em dias úteis são aceitas');
            return;
        }
        this.transactions.push(transaction);
        this.refreshView();
        this.resetForm();
    }
    resetForm() {
        this.elDateInput.value = '';
        this.elAmountInput.value = '';
        this.elValueInput.value = '';
        this.elDateInput.focus();
    }
    refreshView() {
        this.transactionsView.render(this.transactions);
        this.messageView.render('Negociação adicionada com sucesso!');
    }
    isWeekend(date) {
        const weekDay = date.getDay();
        return weekDay === WeekDays.Sunday || weekDay === WeekDays.Saturday;
    }
}
