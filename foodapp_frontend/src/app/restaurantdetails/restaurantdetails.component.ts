import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantdataService } from '../restaurantdata.service';


@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.css']
})
export class RestaurantdetailsComponent {
  restaurantdataService: any;
  menu: any;
  filteredMenu: any;
  constructor(private route:ActivatedRoute,private restaurantService:RestaurantdataService){}
  offer:{head:String,body:string}[]=[];
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
 searchMenu(event:any) {
  let searchTerm = event.target.value;
  
  if(!searchTerm)
    this.filteredMenu = this.menu;
  else {
    this.filteredMenu = this.menu.filter((food: { name: string; }) => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}


}