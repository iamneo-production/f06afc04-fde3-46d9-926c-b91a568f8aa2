import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reslogin',
  templateUrl: './reslogin.component.html',
  styleUrls: ['./reslogin.component.css']
})
export class ResloginComponent {

  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

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

    this.http.post('https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/reslogin', loginData, { responseType: 'json' }).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          this.authService.setAuthenticated(true);
          this.router.navigate(['/resdetails',response]);
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
