import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../Payment';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(public menuService:MenuService, private http: HttpClient) { } 

  orders=this.menuService.order;

  amount:number=this.menuService.getTotalAmount();
  date:Date=new Date();
  
  makePayment() {
    const url = 'http://localhost:8080/payment'; // Replace with your server's endpoint
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let payment:Payment=new Payment(this.amount,this.date);

    // Make the HTTP POST request
    this.http.post<Payment>(url, payment, httpOptions).subscribe(
      (response) => {
        console.log('Payment sent successfully:', response);
        // Handle the response from the server here, if needed
      },
      (error) => {
        console.log(payment);
        console.error('Error sending payment:', error);
        // Handle any errors that occurred during the request
      }
    );
  }








  submitAddress() {
    console.log('Address:');
  }



}
