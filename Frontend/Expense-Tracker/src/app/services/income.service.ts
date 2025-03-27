import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService { 
  private apiUrl = 'http://localhost:5000/api/v1'; // Base URL for the backend API

  constructor(private http: HttpClient) { }  // Injecting HttpClient to enable making HTTP requests

   // Fetches all income records from the backend
  getIncomes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-incomes`);
  }

    // Adds a new income record to the backend
  addIncome(IncomeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-incomes`,IncomeData);
  }
}
