// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SidebarComponent, CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //Arrays to hold the monthly expense, income and savings data for the past 3 months.
  lastThreeMonthsExpense: { month: string; expenseAmount: number }[] = [];
  lastThreeMonthsIncome: { month: string; amount: number }[] = [];
  lastThreeMonthsSavings: { month: string; amount: number }[] = [];

  
  // Variables for the current month's expense, income, and savings
  currentMonthExpense: number = 0;
  currentMonthIncome: number = 0;
  currentMonthSavings: number = 0;
  
  // An aggregated total of the past 3 months (optional)
  totalExpensesPast3Months = 0;
  totalIncomesPast3Months = 0;
  totalSavingsPast3Months = 0;

  constructor(
    public router: Router, // Router instance for navigation
    private dashboardService: DashboardService // DashboardService to handle HTTP requests for data
  ) {}

//  Initiates the loading of data for expenses, income, and savings.
  ngOnInit(): void {
    this.loadExpenseData(); 
    this.loadIncomeData();
    this.loadSavingsData();
  }

    // Fetch the expense data for the last 3 months
  private loadExpenseData(): void {
    this.dashboardService.getExpenses(3).subscribe({
      next: (data) => {
        // Assuming data is sorted from oldest to newest
        const lastThreeEntries = data.slice(-3);
        this.lastThreeMonthsExpense = lastThreeEntries; // Get the last three months' data
        this.totalExpensesPast3Months = lastThreeEntries.reduce( // Store in lastThreeMonthsExpense
          (total, expense) => total + expense.expenseAmount, // Calculate the total expense for the last 3 months
          0
        );
  
        // Find the current month's record
        const currentMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
        const currentRecord = data.find(expense => expense.month === currentMonthName);  // Find the record for the current month
        this.currentMonthExpense = currentRecord ? currentRecord.expenseAmount : 0; // Set the current month's expense
      },
      error: (err) => console.error('Error fetching expense data:', err)
    });
  }
  
 // Fetch the income data for the last 3 months
  private loadIncomeData(): void {
    this.dashboardService.getIncomeData(3).subscribe({
      next: (data) => {
        // Assuming data is sorted from oldest to newest
        const lastThreeEntries = data.slice(-3); // Extract the last three months
        this.lastThreeMonthsIncome = lastThreeEntries; // Store in lastThreeMonthsIncome
        this.totalIncomesPast3Months = lastThreeEntries.reduce(
          (total, income) => total + income.amount, // Calculate the total income for the last 3 months
          0
        );
  
        // Find the current month's record
        const currentMonthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date());
        const currentRecord = data.find(income => income.month === currentMonthName); // Find the record for the current month
        this.currentMonthIncome = currentRecord ? currentRecord.amount : 0;  // Set the current month's income
      },
      error: (err) => console.error("Error fetching income data:", err)
    });
  }
  
 // Fetch the savings data for the last 3 months
  private loadSavingsData(): void {
    this.dashboardService.getSavingsData(3).subscribe({
      next: (data) => {
        const lastThreeEntries = data.slice(-3); // Get the last three months' data
      
      this.lastThreeMonthsSavings = lastThreeEntries;  // Store in lastThreeMonthsSavings
      this.totalSavingsPast3Months = lastThreeEntries.reduce 
        (total, monthData) => total + monthData.amount, // Calculate the total savings for the last 3 months
        0
      );
  
        // Extract current month savings from returned data
        const currentMonthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
        const currentRecord = data.find(record => record.month === currentMonthName); // Find the record for the current month
        this.currentMonthSavings = currentRecord ? currentRecord.amount : 0;  // Set the current month's savings
      },
      error: (err) => console.error('Error fetching savings data:', err)
    });
  }
  

  // Navigation methods to route to different pages (Income, Expense, Savings)
  onIncome() {
    this.router.navigate(['/expense-tracker/income']);
  }

  onExpense() {
    this.router.navigate(['/expense-tracker/expense']);
  }

  onSavings() {
    this.router.navigate(['/expense-tracker/savings']);
  }
}
