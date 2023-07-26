import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{

  id!:number;
  customer:Customer=new Customer();

  constructor(private service:CustomerService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.service.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
    });
  }

  onSubmit(){
    this.service.updateCustomer(this.id,this.customer).subscribe((data : any)=>{
      this.gotoProfile(data);
    })
  }

  gotoProfile(customer : any)
  {
    this.router.navigate(['profile',customer])
  }

}
