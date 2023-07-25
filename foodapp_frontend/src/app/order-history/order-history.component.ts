import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { Order } from '../order';
=======
import { Order } from '../order.model';
import { HttpClient } from '@angular/common/http';
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
<<<<<<< HEAD

  orders:Order[]=[];
  order : any = {
      customerId: "",
     orderId: "",
     restaurantId: "",
     menuItemId: "",
     totalCost: "",
     deliveryAddress: "",
     deliveryTime: "",
     status: ""
  };

  constructor(private service:OrderService,private router:Router, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void{

    // this.getorders();
    console.log(this.activatedRoute.snapshot.params);

    this.order.customerId = this.activatedRoute.snapshot.paramMap.get("customerId");
    this.order.orderId= this.activatedRoute.snapshot.paramMap.get("orderId");
    this.order.restaurantId = this.activatedRoute.snapshot.paramMap.get("restaurantId");
    this.order.menuItemId = this.activatedRoute.snapshot.paramMap.get("menuItemId");
    this.order.deliveryAddress = this.activatedRoute.snapshot.paramMap.get("deliveryAddress");
    this.order.deliveryTime = this.activatedRoute.snapshot.paramMap.get(" deliveryTime");
    this.order.status = this.activatedRoute.snapshot.paramMap.get("status");
    
}

getOrders(){
  this.service.orderhistory().subscribe(data=>{
    this.orders=data;
  })
}
reorderItems(order:any){
  this.service.reorderItems(order,order.customerId).subscribe((response: any) => {
  this.router.navigate(['cart', order.customerId]);
});
}

=======
  

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
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55
}
