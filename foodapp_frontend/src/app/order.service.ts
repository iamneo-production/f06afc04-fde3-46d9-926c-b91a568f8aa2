import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = "http://localhost:8080/order";

  constructor(private http:HttpClient) { }

  getOrderByCustomerId(customerId:number):Observable<Order> 
  {
     return this.http.get<Order>(`${this.baseURL}/customerId/${customerId}`);
  }

  orderhistory(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseURL}`);
  }

  createOrder(newOrder: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}`, newOrder);
  }
}
