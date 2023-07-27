import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantdataService } from '../restaurantdata.service';


@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.css']
})
export class RestaurantdetailsComponent {
  constructor(private route:ActivatedRoute,private restaurantService:RestaurantdataService){}
  id:number=0
  restaurant:any;
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      console.log(this.id)
      this.getRestaurntDetail(this.id)
    });
  }
 getRestaurntDetail(id:number){
  this.restaurantService.getRestaurantById(id).subscribe(data=>{
    this.restaurant=data
  })
 }
}
