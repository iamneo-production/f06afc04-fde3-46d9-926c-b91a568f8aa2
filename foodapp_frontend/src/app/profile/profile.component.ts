import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {
  customer: Customer | undefined;
  customerId!: number;
  isAuthenticated: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.authService.isAuthenticated$.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
    this.route.params.subscribe((params) => {
      this.customerId = +params['id'];
      this.getCustomerProfile();
    });
  }

  getCustomerProfile(): void {
    this.customerService.getCustomerById(this.customerId).subscribe(
      (customer) => {
        this.customer = customer;
      },
      (error) => {
        console.error('Error fetching customer profile:', error);
      }
    );
  }
  updateCustomer(id:number){
   
  }
  
 
}
