import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  city: string = '';
  street: string = '';
  state: string = '';
  zipcode: string = '';
  

  

  constructor(private http: HttpClient, private router: Router,  private service:CustomerService) { }

  register():void {

    if (!this.name || !this.email || !this.password || !this.zipcode) {
      alert('Please provide all the required details.');
      return; 
    }
    const addressData = {
      street: this.street,
      city: this.city,
      state: this.state,
      zipCode: this.zipcode
    };
    const customerData = {
      name: this.name,
      email: this.email,
      password: this.password,
      addressId: addressData
    };

   

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('https://8080-baadfdbadacdfeacfcdbceaeaadbdbabf.project.examly.io/customer', customerData, { headers, responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response); 
        if (response.includes('created') || response.includes('Customer created')) {
          alert('Registration successful!');
        } else if (response.includes('already registered')) {
          alert('Email is already registered. Please use a different email.');
        } else {
          alert('Registration failed. Please try again later.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
   
  }
  
}


