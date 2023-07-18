import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    if ( !this.email || !this.password ) {
      alert('Please provide all the required details.');
      return; 
    }
    
    const loginData = { 
      email: this.email, 
      password: this.password 
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('http://localhost:8080/login', loginData, { headers, observe: 'response' }).subscribe(
      (response) => {
        if (response.status === 200) {
          // Login successful, redirect to the Home component
          this.router.navigate(['/contactus']);
        } 
        },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Show an alert for invalid credentials
          alert('Invalid credentials. Please try again.');
        } else {
          console.log(error);
        }
      }
    );
  }
}
