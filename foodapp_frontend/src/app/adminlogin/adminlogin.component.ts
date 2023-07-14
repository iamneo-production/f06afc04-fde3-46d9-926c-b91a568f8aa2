import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  adminlogin(): void {
    if (!this.validateEmailFormat(this.email)) {
      alert('Incorrect email format. Please enter a valid email address.');
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>('http://localhost:8080/adminLogin', loginData, { headers, observe: 'response' }).subscribe(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          // Login successful, store the admin name in AdminService

          // Redirect to the Adminpanel component
          this.router.navigate(['/Adminpanel']);
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

  validateEmailFormat(email: string): boolean {
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
