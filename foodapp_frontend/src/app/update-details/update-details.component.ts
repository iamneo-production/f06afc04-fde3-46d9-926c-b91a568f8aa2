import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
=======

import { RestaurantdataService } from '../restaurantdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant.model';
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  id!:number;
<<<<<<< HEAD
  restaurant:Restaurant=new Restaurant();

  constructor(private service:RestaurantService, private route:ActivatedRoute, private router:Router){}
=======
  restaurant!: Restaurant;

  constructor(private service:RestaurantdataService, private route:ActivatedRoute, private router:Router){}
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.service.getRestaurantById(this.id).subscribe(data=>{
      this.restaurant=data;
    });
  }

  onSubmit(){
    this.service.updateRestaurant(this.id,this.restaurant).subscribe((data : any)=>{
      this.gotoResdetails(data);
    })
  }

  gotoResdetails(restaurant : any)
  {
    this.router.navigate(['/resdetails',restaurant])
  }


}
