import { HttpClient } from '@angular/common/http'; // Importing HttpClient to make HTTP requests
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'; // Importing Observable to handle async operations and throwError for error handling


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private apiUrl = 'http://localhost:5000/api/v1'; // Base URL for the backend API

  constructor(private http: HttpClient) {} // Injecting HttpClient to enable HTTP requests

  // Fetches all income records from the backend
  getIncomes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-incomes`);
  }

// Fetches all expense records from the backend
getExpenses(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/get-expenses`);
}

}
