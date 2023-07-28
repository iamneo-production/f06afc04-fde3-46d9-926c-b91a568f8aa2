import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart/cart.service';

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
export class OrdertrackingComponent implements OnInit {
  order: Order | undefined;

  constructor(private http: HttpClient,private cartService:CartService) { }

  ngOnInit(): void {
    this.fetchOrderDetails();
  }

  fetchOrderDetails() {
    const orderId:number = this.cartService.cusId; 
    this.http.get<Order>(`hhttps://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/${orderId}`)
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