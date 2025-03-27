const Expense = require("../models/expenseModel");

// Fetches expenses from the database.
const getExpenses = async (req, res) => {
  try {
    const { months } = req.query; //Filters by past 'months' if provided

    let query = {};
    if (months) {

      const monthsCount = parseInt(months, 10);
      if (!isNaN(monthsCount)) {
        const currentDate = new Date(); // Get current date
        const startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - monthsCount + 1,
          1
        );
        query = { date: { $gte: startDate, $lte: currentDate } }; // Filter by date 
      }
    }

    const expenses = await Expense.find(query).sort({ date: 1 }); // Get and sort expenses by date
    res.status(200).json({ data: expenses }); / Send expenses as response
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
};

// Adds a new expense to the database.
const addExpense = async (req, res) => {
  try {
    const { month, date, expenseType, expenseAmount } = req.body;  // Get expense data from request
    const newExpense = new Expense({
      month,
      date,
      expenseType,
      expenseAmount
    });
    // Save the new expense to the database
    await newExpense.save();
    res.status(201).json({ message: 'Expense added successfully', data: newExpense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = { getExpenses, addExpense };
