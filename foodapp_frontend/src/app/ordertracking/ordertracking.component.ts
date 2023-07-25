import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Order {
  id: number;
  customerId: number;
  menuItemId: number;
  totalCost: number;
  deliveryAddress: string;
  deliveryTime: string;
  restaurantId: number;
  status: string;
}

@Component({
  selector: 'app-ordertracking',
  templateUrl: './ordertracking.component.html',
  styleUrls: ['./ordertracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  order: Order | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchOrderDetails();
  }

  fetchOrderDetails() {
    const orderId = 1; // Replace with the actual order ID you want to track
    this.http.get<Order>(`http://localhost:8080/order/${orderId}`)
      .subscribe(
        (response) => {
          this.order = response;
        },
        (error) => {
          console.error('Failed to fetch order details:', error);
        }
      );
  }
}
