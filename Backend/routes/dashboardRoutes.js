const express = require('express');  // Import Express framework
const router = express.Router();  // Create a new router instance
const dashboardController = require('../controllers/dashboardController'); // Import dashboard controller

router.get('/dashboard', dashboardController.getDashboardData); // Route to fetch dashboard data

module.exports = router; // Export the router to be used in other parts of the app
