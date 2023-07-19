import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {

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

}
