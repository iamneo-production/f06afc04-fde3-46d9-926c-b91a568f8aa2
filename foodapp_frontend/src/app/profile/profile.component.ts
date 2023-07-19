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
  customers:Customer[]=[];
  customer : any = {
    id: "",
    name : "",
    email : "",
    addressId  : "",
    password : "",
  };
  constructor(private service:CustomerService,private router:Router, private activatedRoute : ActivatedRoute){}  
ngOnInit(): void{

    // this.getCustomers();
    console.log(this.activatedRoute.snapshot.params);

    this.customer.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.customer.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.customer.email = this.activatedRoute.snapshot.paramMap.get("email");
    this.customer.addressId = this.activatedRoute.snapshot.paramMap.get("addressId");
    this.customer.password = this.activatedRoute.snapshot.paramMap.get("password");
    
}

getCustomers(){
  this.service.profile().subscribe(data=>{
    this.customers=data;
  })
}

updateCustomer(id:number){
  this.router.navigate(['update-customer', id]);
}


}

