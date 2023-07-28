import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantOrder } from './restaurant-order.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrderService {
  private apiUrl = 'https://8081-acebbedadecfacfcdbccbacbfccbbebfcae.project.examly.io/restaurant-orders'; // Replace with your API URL for restaurant orders

  constructor(private http: HttpClient) {}

  getRestaurantOrdersByRestaurantId(restaurantId: number): Observable<RestaurantOrder[]> {
    return this.http.get<RestaurantOrder[]>(`${this.apiUrl}?restaurantId=${restaurantId}`);
  }
}