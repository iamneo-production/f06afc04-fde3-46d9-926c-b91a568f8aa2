import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantdataService } from '../restaurantdata.service';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent {
  restaurant: Restaurant[] = [];
  searchText = '';
  cuisineTypes: string[] = [];

  constructor(
    private restaurantdata: RestaurantdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'] || '';
      const cuisineTypeParam = params['cuisineType'];
      this.cuisineTypes = cuisineTypeParam ? cuisineTypeParam.split(',') : [];
      this.getRestaurants();
    });
  }

  getRestaurants() {
    this.restaurantdata.restaurants().subscribe((data: any) => {
      if (this.searchText.trim() === '') {
        if (this.cuisineTypes.length > 0) {
          this.restaurant = data.filter((item: Restaurant) => this.cuisineTypes.some(cuisine => item.cuisinetype.toLowerCase().includes(cuisine.toLowerCase())));
        } else {
          this.restaurant = data;
        }
      } else {
        this.restaurant = data.filter((item: { name: string }) =>
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    });
  }

  onclick(id: number) {
    this.router.navigate(['/restaurantdetails', id]);
  }
}