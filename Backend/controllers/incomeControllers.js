const Income = require("../models/incomeModel");

// Fetches incomes from the database
const getIncome = async (req, res) => {
  try {
    const { months } = req.query;   // Filters by past 'months' if provided

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
        query = { date: { $gte: startDate, $lte: currentDate } }; // Filter by date range
      }
    }

    const incomes = await Income.find(query).sort({ date: 1 }); // Get and sort incomes by date
    res.status(200).json({ data: incomes }); // Send incomes as response
  } catch (error) {
    console.error("Error fetching incomes:", error);
    res.status(500).json({ message: "Error fetching incomes", error });
  }
};

// Adds a new income to the database.
const addIncome = async (req, res) => {
  try {
    const { month, date, incomeType, incomeAmount } = req.body; // Get income data from request
    const newIncome = new Income({
      month,
      date,
      incomeType,
      incomeAmount
    });
    await newIncome.save();   // Save the new income
    res.status(201).json({ message: "Income added successfully", data: newIncome });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getIncome, addIncome };
