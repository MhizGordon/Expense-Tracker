const Saving = require('../models/Saving'); // Import Saving model

// Fetches all savings from the database
exports.getSavings = async (req, res) => {
  try {
    const savings = await Saving.find(); // Retrieve all savings
    res.json(savings); // Send savings as JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Adds a new saving to the database.
exports.addSaving = async (req, res) => {
  try {
    const { month, amount } = req.body; // Extract month and amount from request body
    const newSaving = new Saving({ month, amount }); // Create new saving document
    await newSaving.save();  // Save the new saving
    res.status(201).json({ message: 'Saving added successfully', data: newSaving });
  } catch (error) {
    res.status(500).json({ message: 'Error adding saving', error });
  }
};
