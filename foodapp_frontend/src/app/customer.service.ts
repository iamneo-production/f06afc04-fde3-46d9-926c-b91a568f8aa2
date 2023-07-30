import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = 'https://8080-baadfdbadacdfeacfcdbceaeaadbdbabf.project.examly.io/customer';

  constructor(private http: HttpClient) {}

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseURL}/${id}`);
  }

  // Other methods for registration, updating profile, etc.

  setAuthenticated(authenticated: boolean): void {
    // Implement your logic to set the authenticated state (e.g., using LocalStorage, BehaviorSubject, etc.)
    
  }
}
