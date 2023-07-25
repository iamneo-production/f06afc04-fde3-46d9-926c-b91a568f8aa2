import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Order {
  id: number;
  customerId: number;
  totalCost: number;
  deliveryAddress: string;
  deliveryTime: string;
  restaurantId: number;
  status: string;
}

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  order: Order | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchOrderDetails();
  }

  fetchOrderDetails() {
    const orderId = 1; 
    this.http.get<Order>(`https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/GET_Order`)
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
