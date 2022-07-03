import { TransactionController } from "./controllers/TransactionController.js";

const transactionController = new TransactionController();
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  transactionController.add();
})