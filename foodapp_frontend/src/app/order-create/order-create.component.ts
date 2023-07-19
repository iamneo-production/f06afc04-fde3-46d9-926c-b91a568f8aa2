import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {

  customerId: string='';
  orderId: string= '';
  restaurantId: string ='';
  menuItemId: string= '';
  totalCost: string= '';
  deliveryAddress: string='';
  deliveryTime: string='';
  status: string='';

  constructor(private orderService: OrderService) { }

  createOrder() {
    const newOrder = {
      customerId: Number(this.customerId),
      restaurantId: this.restaurantId,
      menuItemId: this.menuItemId,
      totalCost: this.totalCost,
      deliveryTime: new Date(this.deliveryTime),
      deliveryAddress: this.deliveryAddress,
      status: this.status
    };

    this.orderService.createOrder(newOrder).subscribe(
      (response) => {
        // Handle successful order creation
        console.log('Order created successfully', response);
       
      },
      (error) => {
        // Handle error
        console.error('Error creating order', error);
      }
    );
  }

}
