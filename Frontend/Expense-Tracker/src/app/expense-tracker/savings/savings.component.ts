import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Chart, ChartType, registerables } from 'chart.js';
import { Router } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { Saving, SavingService } from '../../services/saving.service';

Chart.register(...registerables);

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [MatCard, FormsModule, ReactiveFormsModule, MatIconModule, DecimalPipe],
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit { // List of months for the chart and form selection
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // FormGroup for adding a new saving entry
  addSavingForm!: FormGroup;
  monthSelected: boolean = false; // Tracks if a month is selected in the form
  totalSavings: number = 0; // Stores the total savings across all months
  savingsChart: Chart | undefined; // The chart instance for visualizing savings data

  constructor(
    private router: Router,
    private savingService: SavingService) { }

   // On initialization, create the form and fetch existing savings
  ngOnInit(): void {
    this.addSavingForm = new FormGroup({
      month: new FormControl('', Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.min(0)])
    });
 
     // Fetch saved savings from the backend and initialize the chart
  this.savingService.getSavings().subscribe((savings:Saving[]) => {
    savings.forEach((saving) => {
      const monthIndex = this.months.indexOf(saving.month);
      const amount = saving.amount;
      if (monthIndex !== -1) {
        this.updateChart(saving.month, saving.amount, false); // Update chart without duplication
        this.totalSavings += saving.amount; // Update total savings
      }
    });
  });
      

    this.renderChart();
  }

  onSubmit(): void {
    console.log('Add Savings clicked. Form valid?', this.addSavingForm.valid);
    if (this.addSavingForm.valid) {
      const selectedMonth = this.addSavingForm.value.month;
      const amount = Number(this.addSavingForm.value.amount);
      this.savingService.addSaving({ month: selectedMonth, amount }).subscribe((response) => {
        console.log(response.message);

      this.totalSavings += amount; // Update total savings
      this.updateChart(selectedMonth, amount);  // Update chart data
      this.addSavingForm.reset();// Reset form
      this.monthSelected = false;
    });
  }else {
      console.error('Form is invalid');
    }
  }

  // Handle month selection change
  onChange(event: any): void {
    const selectedMonth = event.target.value;
    this.monthSelected = !!selectedMonth;
    console.log('Month selected?', this.monthSelected, selectedMonth);
  }
  
// Renders the savings chart with initial configuration
  renderChart(): void {
    const ctx = document.getElementById('savingsChart') as HTMLCanvasElement;
    if (ctx) {
      // Initialize the chart with default data
      this.savingsChart = new Chart(ctx, {
        type: 'bar' as ChartType,
        data: {
          labels: this.months,  // Set months as the labels for the chart
          datasets: [{
            label: 'Savings per Month ($)', // Label for the chart
            data: Array(12).fill(0),  // Initialize with zero data for each month
            backgroundColor: '#66BB6A',  // Bar color
            borderColor: '#388E3C',  // Border color
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',  // Set bars to be horizontal
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: { display: false },
              grid: { display: false }
            },
            y: {
              grid: { display: false },
            }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
      } else {
        console.error('Canvas element not found');
      }
    }

    // Updates the chart data for a given month and amount
    updateChart(month: string, amount: number, updateTotal: boolean = true): void {
      if (this.savingsChart) {
        const monthIndex = this.months.indexOf(month);
        if (monthIndex !== -1) {
          const currentData = this.savingsChart.data.datasets![0].data as number[];
  
          // Add the amount to the current month's value
          currentData[monthIndex] = (currentData[monthIndex] || 0) + amount;
  
          // Update the chart
          this.savingsChart.update();
  
          // Optionally update the total savings
          if (updateTotal) {
            this.totalSavings += amount;
          }
        }
      }
    }

// Navigates back to the dashboard
  onBack(): void {
    this.router.navigate(['/expense-tracker/dashboard']);
  }

  saveForm(): void {
    console.log('Form saved!');
  }
}
