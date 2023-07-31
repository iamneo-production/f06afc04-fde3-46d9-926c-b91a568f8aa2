import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  

  order: Order[] =[];
  selectedOrderIds: number[] = [];


  constructor(private service:OrderService,private router:Router, private activatedRoute : ActivatedRoute,private http: HttpClient){}

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder(): void {
    const customerId = Number(this.activatedRoute.snapshot.paramMap.get("customerId"));
    console.log("customerId:", customerId);

    this.service.getOrderByCustomerId(customerId).subscribe(
      (response) => {
        if (Array.isArray(response) && response.every(item => item instanceof Order)) {
          this.order = response; 
          console.error('Invalid API response format:', response);
          this.order = []; 
        }
      },
      (error) => {
        console.error('Error fetching orders:', error);
        this.order = [];
      }
    );
  }

  reorder(): void {
    // Check if any orders are selected
    if (this.selectedOrderIds.length === 0) {
      console.log('No orders selected for reorder.');
      return;
    }

    // Pass the selected order IDs to the cart page for reordering
    this.router.navigate(['/cart'], { queryParams: { orderIds: this.selectedOrderIds.join(',') } });
  }
}