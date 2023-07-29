import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantsignup',
  templateUrl: './restaurantsignup.component.html',
  styleUrls: ['./restaurantsignup.component.css']
})
export class RestaurantsignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  menu_item_id: number =0;
  deliverytime: string = '';
  minimumordervalue: string = '';
  cuisinetype: string = '';
  imageData: string = '';
  rating: string = '';
  


  constructor(private http: HttpClient, private router: Router) {}

  register(): void {

    if (!this.validateEmailFormat(this.email)) {
      alert('Incorrect email format. Please enter a valid email address.');
      return;
    }

    if (!this.name || !this.email || !this.password || !this.address|| !this.deliverytime || !this.minimumordervalue || !this.cuisinetype) {
      alert('Please provide all the required details.');
      return;
    }
  
    const restaurantData = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      menu_item_id: this.menu_item_id ,
      deliverytime:this.deliverytime,
      minimumordervalue:this.minimumordervalue,
      cuisinetype:this.cuisinetype,
      rating:this.rating,
      imageData:this.imageData,// Assign the value of menu_item_id
    };
  
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  
    this.http.post('https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/restaurant', restaurantData, { headers, responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response);
        if (response.includes('created') || response.includes('Restaurant created')) {
          alert('Registration successful!');
          this.router.navigate(['/restaurantlogin']);
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

  validateEmailFormat(email: string): boolean {
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
