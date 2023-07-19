import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService ) {}

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

    this.http.post('http://localhost:8080/login', loginData, { responseType: 'json' }).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          this.authService.setAuthenticated(true);
          this.router.navigate(['profile',response] );
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
function subscribe(arg0: (response: any) => void, arg1: (error: HttpErrorResponse) => void) {
  throw new Error('Function not implemented.');
}

