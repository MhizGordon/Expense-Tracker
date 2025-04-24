# Expense Tracker App

An intuitive web application for tracking your monthly **income**, **expenses**, and **savings**, complete with visual charts to help understand financial habits.

---

##  Features

  **User Authentication**  
  Secure login and registration system.

  **Income Tracking**  
  Add and view incomes from different sources (e.g., salaries, freelancing, gifts).

  **Expense Tracking**  
  Log expenses by category (e.g., groceries, rent, utilities) and view totals per month.

  **Savings Tracker**  
  Add savings for each month and visualize your progress with a horizontal bar chart.

 **Transaction Overview**  
  View a pie chart that compares total income and expenses for a selected month.

  **Navigation & Layout**  
  Dashboard with quick links to Income, Expenses, Savings, History, and Logout.

---

## Tech Stack

###  Frontend
- **Angular**
- **HTML + CSS**
- **TypeScript**
- **Chart.js** *(for visualizing data)*

###  Backend
- **Node.js**
- **Express**
- **MongoDB** *(Mongoose ODM)*
- **JWT (JSON Web Tokens)** *(for authentication)*

---

##  Setup Instructions
Follow these steps to set up and run the Expense Tracker app locally:
- git clone https://github.com/your-username/expense-tracker.git  //clone the respository
- cd expense-tracker
- cd ../backend    
- npm install
- Create a .env file in the backend folder with the following content (or update your MongoDB connection string accordingly):
- npm install mongodb
**MONGO_URI=mongodb://localhost:27017/expense-tracker
  JWT_SECRET=your_jwt_secret_key
  PORT=5000**
- node index.js 
- cd ../frontend
- cd Expense-Tracker
- cd src
- cd app
- cd expense-tracker
- cd dashboard
- npm install
- ng serve




###  Install Dependencies

```bash
npm install
npm install chart.js
