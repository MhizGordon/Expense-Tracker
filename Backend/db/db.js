const mongoose = require('mongoose');  // Import mongoose for MongoDB connection

// Connects to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {  // Connect to MongoDB using the URI from environment variables
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
