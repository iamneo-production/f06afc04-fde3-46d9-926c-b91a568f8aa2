import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  customer: Customer | null = null;
  constructor(private service:CustomerService,private router:Router, private activatedRoute : ActivatedRoute){}  
  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer(): void {
    const customerId = Number(this.activatedRoute.snapshot.paramMap.get("id"));

    this.service.getCustomerById(customerId).subscribe(
      (customer) => {
        this.customer = customer;
      },
      (error) => {
        console.error('Error fetching customer:', error);
      }
    );
  }

updateCustomer(id:number){
  this.router.navigate(['update-customer', id]);
}


}