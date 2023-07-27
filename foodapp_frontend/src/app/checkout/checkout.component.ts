import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../Payment';
import { MenuService } from '../menu/menu.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(public menuService:MenuService, private http: HttpClient,private router: Router,private cartService:CartService) { } 

  orders=this.menuService.order;
  paymentDone:boolean = false;

  amount:number=this.menuService.getTotalAmount();
  date:String=new Date().toISOString().split('T')[0];
  public order: any = {
    customerId: 0,
    menuItemId: 25,
    totalCost: 500,
    deliveryAddress:"",
    deliveryTime: '2023-12-12T09:30:00',
    restaurantId: 0,
    status: 'delivering'
  };
  public message: string = '';
  
  makePayment() {
    const url = 'https://8080-bfdadceabdbcdeacfcdbceaeaadbdbabf.project.examly.io/payment'; // Replace with your server's endpoint
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let payment:Payment=new Payment(this.amount,this.date);

    // Make the HTTP POST request
    this.http.post<Payment>(url, payment, httpOptions).subscribe(
      (response) => {
        // console.log('Payment sent successfully:', response);
        this.paymentDone=true;
        this.menuService.order = [];
        this.createOrder();
        
        
      },
      (error) => {
        console.log(payment);
        console.error('Error sending payment:', error);
        // Handle any errors that occurred during the request
      }
    );
  }
  public createOrder() {
    const url = 'https://8080-bfdadceabdbcdeacfcdbceaeaadbdbabf.project.examly.io/order';
    this.order.deliveryTime = new Date(this.order.deliveryTime).toISOString();
    this.http.post(url, this.order).subscribe(
      (response: any) => {
        this.message = 'Order created successfully!';
        this.cartService.cusId=response.id;
        this.router.navigate(['/ordertracking']);
        
      },
      (error) => {
        console.log('Error creating order:', error);
        console.log('Error response body:', error.error);
        this.message = 'Failed to create order. Please provide sufficient details.';
      }
    );
  }
}
