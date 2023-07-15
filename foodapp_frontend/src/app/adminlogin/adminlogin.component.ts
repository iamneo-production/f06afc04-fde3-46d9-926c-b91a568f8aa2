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
  ) { }

  adminlogin(): void {

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

}
