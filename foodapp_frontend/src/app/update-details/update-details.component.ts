import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  id!:number;
  restaurant:Restaurant=new Restaurant();

  constructor(private service:RestaurantService, private route:ActivatedRoute, private router:Router){}

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
