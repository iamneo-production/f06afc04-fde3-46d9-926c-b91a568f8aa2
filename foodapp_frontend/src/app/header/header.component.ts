import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router,  private http: HttpClient) {}

  ngOnInit(): void {}

  

  
  logout(): void {
    this.http.post('https://8080-cdcccaeacaaacfcdbccbacbfccbbebfcae.project.examly.io/logout', null)
      .subscribe(
        () => {
          // Redirect to login page or perform other logout actions
          this.router.navigate(['/Dashboard']); // Redirect to login page
        },
        (error: any) => {
          console.error('Error logging out:', error);
          window.alert('Failed to logout');
        }
      );
  }
}
