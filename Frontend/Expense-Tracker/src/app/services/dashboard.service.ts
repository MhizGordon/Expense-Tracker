import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Service to interact with the backend API and fetch dashboard-related data
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'http://localhost:5000/api/v1'; // API base URL for the server

  constructor(private http: HttpClient) {}  //Inject HttpClient for making HTTP requests

   // Fetches income data for a specified number of months
  getIncomeData(months: number): Observable<{ date: string; month: string; amount: number }[]> {
    return this.http
      .get<{ data: { date: string; month: string; amount: number }[] }>(
        `${this.apiUrl}/get-incomes?months=${months}`
      )
      .pipe(map(response => response.data)); // Extract 'data' from the response
  }
  

  // Fetches expense data for a specified number of months
  getExpenses(months: number): Observable<{ date: string; month: string; expenseAmount: number }[]> {
    return this.http.get<{ data: { date: string; month: string; expenseAmount: number }[] }>(
      `${this.apiUrl}/get-expenses?months=${months}`
    ).pipe(map(response => response.data)); // Extract 'data' from the response
  }
  
  // Fetches savings data for a specified number of month
  getSavingsData(months: number): Observable<{ month: string; amount: number }[]> {
    return this.http.get<{ month: string; amount: number }[]>(
      `${this.apiUrl}/get-savings?months=${months}`
    );
  }  
  
}
