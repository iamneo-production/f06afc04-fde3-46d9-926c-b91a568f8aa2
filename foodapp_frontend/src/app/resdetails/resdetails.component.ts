import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-resdetails',
  templateUrl: './resdetails.component.html',
  styleUrls: ['./resdetails.component.css']
})
export class ResdetailsComponent {
  id!: number;
  restaurant: Restaurant | null = null;
  constructor(private service:RestaurantService,private router:Router, private route : ActivatedRoute){}  
  ngOnInit(): void {
    this.loadRestaurant();
  }

  loadRestaurant(): void {
    this.id=this.route.snapshot.params['id'];

    this.service.getRestaurantById(this.id).subscribe(
      (restaurant) => {
        this.restaurant = restaurant;
      },
      (error) => {
        console.error('Error fetching resataurant:', error);
      }
    );
  }

updateRestaurant(id:number){
  this.router.navigate(['update-details', id]);
}


}
