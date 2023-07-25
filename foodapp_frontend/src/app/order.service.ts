import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
<<<<<<< HEAD
import { Order } from './order';
=======
import { Order } from './order.model';



>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55

@Injectable({
  providedIn: 'root'
})
export class OrderService {

<<<<<<< HEAD
  private baseURL = "http://localhost:8080/order";
=======
  private baseURL = "https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/order";
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55
  
 


  constructor(private http:HttpClient) { }

  getOrderByCustomerId(customerId:number):Observable<Order[]> 
  {
     return this.http.get<Order[]>(`${this.baseURL}/customerId/${customerId}`);
  }

  orderhistory(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseURL}`);
  }

  createOrder(newOrder: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}`, newOrder);
  }
  reorderItems(order: any, customerId:number): Observable<number> {
    // Assuming you have an API endpoint in the backend to initiate the reorder process
    return this.http.post<number>(`${this.baseURL}/reorder/${customerId}`, order);

  
}
}
