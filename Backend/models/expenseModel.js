const mongoose = require('mongoose'); // Import mongoose for database modeling

// Define the schema for expenses
const expenseSchema = new mongoose.Schema({
  month: { type: String, required: true }, // Month of the expense 
  date: { type: String, required: true },   // Date of the expense 
  expenseType: { type: String, required: true }, // Category or type of expense
  expenseAmount: { type: Number, required: true }, // Expense amount 
});

// Export the Expense model using the schema
module.exports = mongoose.model('Expense', expenseSchema);
