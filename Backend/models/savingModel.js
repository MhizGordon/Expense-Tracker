const mongoose = require('mongoose');

// Define the schema for savings
const savingSchema = new mongoose.Schema({ 
  month: { type: String, required: true },  // Month of the savings
  amount: { type: Number, required: true }  // Savings amount
});

module.exports = mongoose.model('Saving', savingSchema);
