const express = require('express');
const router = express.Router();
// Import controller functions for handling income, expense, and history
const { addIncome, getIncomes } = require('../controllers/incomeControllers');
const { addExpense, getExpenses } = require('../controllers/expenseControllers');
const {getHistory} = require('../controllers/historyControllers');

// Define routes for income, expense, and history
router.post('/add-income', addIncome) // Route to add a new income
      .get('/get-incomes', getIncomes)  // Route to fetch all incomes
      .post('/add-expense', addExpense) // Route to add a new expense
      .get('/get-expenses', getExpenses) // Route to fetch all expenses
      .get('/history', getHistory); // Route to fetch combined income and expense history


module.exports = router;
