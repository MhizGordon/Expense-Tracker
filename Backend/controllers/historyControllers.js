const Income = require('../models/incomeModel');
const Expense = require('../models/expenseModel');

// Fetches all incomes from the database.
const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find(); // Retrieve all incomes
        res.json(incomes); // Send incomes as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetches all expenses from the database
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find(); // Retrieve all expenses
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetches combined history of incomes and expenses
const getHistory = async (req, res) => {
    try {
      const incomes = await HistoryService.fetchIncomes();  // Fetch incomes using service
      const expenses = await HistoryService.fetchExpenses(); // Fetch expenses using service
      
      const history = {
        incomes,
        expenses
      };
  
      res.json(history); // Send combined history as response
    } catch (error) {
      res.status(500).json({ message: 'Error fetching history', error });
    }
  };
module.exports = { getIncomes, getExpenses, addIncome, getHistory }; // Export the functions
