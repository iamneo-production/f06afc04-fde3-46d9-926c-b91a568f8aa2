import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

>>>>>>> 08a481a5c5f6d54a173704e846821425e3d3b270

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
<<<<<<< HEAD
=======
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router,     private authService: AuthService ) {}


  adminlogin(): void {

    const loginData = {
      email: this.email,
      password: this.password
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>('https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/adminLogin', loginData, { headers, observe: 'response' }).subscribe(
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
>>>>>>> 08a481a5c5f6d54a173704e846821425e3d3b270

}
