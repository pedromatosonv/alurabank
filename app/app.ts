import { TransactionController } from "./controllers/TransactionController.js";

const transactionController = new TransactionController();
const form = document.querySelector('.form');

if (!form) {
  throw new Error('A form whose selector is ".form" was not found!');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  transactionController.add();
})

const importBtn = document.querySelector('#importBtn');

if (!importBtn) {
  throw new Error('Import button was not found!');
}

importBtn.addEventListener('click', () => {
  transactionController.import();
})