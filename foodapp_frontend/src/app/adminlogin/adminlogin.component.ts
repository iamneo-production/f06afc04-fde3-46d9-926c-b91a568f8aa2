import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  email = '';
  password = '';
  defaultEmail = 'admin@gmail.com';
  defaultPassword = 'admin';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

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

    // Check default credentials in the frontend
    if (this.defaultEmail === this.email && this.defaultPassword === this.password) {
      // Redirect to the Adminpanel component
      this.authService.setAuthenticated(true, 'admin'); // Set the user type as 'admin'
      this.router.navigate(['/adminpanel']);
      return;
    }

    // If not default credentials, send the login request to the backend
    this.http.post<any>('https://8080-eaeeecbfecacfcdbccbacbfccbbebfcae.project.examly.io/adminLogin', loginData, { headers, observe: 'response' }).subscribe(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          // Login successful, store the admin name in AdminService
          // Redirect to the Adminpanel component
          this.authService.setAuthenticated(true, 'admin'); // Set the user type as 'admin'
          this.router.navigate(['/adminpanel']);
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