const mongoose = require('mongoose'); // Import mongoose for database modeling

// Define the schema for incomes
const incomeSchema = new mongoose.Schema({
  month: { type: String, required: true }, // Month of the income
  date: { type: String, required: true },   // Date of the income
  source: { type: String, required: true }, // Category or type of income
  amount: { type: Number, required: true }, // Income amount
});

// Export the Income model using the schema
module.exports = mongoose.model('Income', incomeSchema);
