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
  cuisineType = '';

  constructor(
    private restaurantdata: RestaurantdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'] || '';
      this.cuisineType = params['cuisineType'] || '';
      this.getRestaurants();
    });
  }

  getRestaurants() {
    if (this.searchText.trim() === '') {
      if (this.cuisineType.trim() !== '') {
        // If cuisineType is provided, get restaurants by cuisineType
        this.restaurantdata.getRestaurantsByCuisine(this.cuisineType).subscribe((data: Restaurant[]) => {
          this.restaurant = data;
        });
      } else {
        // If no search or cuisineType provided, get all restaurants
        this.restaurantdata.restaurants().subscribe((data: Restaurant[]) => {
          this.restaurant = data;
        });
      }
    } else {
      // If searchText is provided, get restaurants by name
      this.restaurantdata.getRestaurantByName(this.searchText).subscribe((data: Restaurant) => {
        if (data) {
          this.restaurant = [data]; // Convert single object to an array
        } else {
          // If no restaurant found by name, search for restaurants by cuisineType
          this.restaurantdata.getRestaurantsByCuisine(this.searchText).subscribe((data: Restaurant[]) => {
            this.restaurant = data;
          });
        }
      });
      this.restaurantdata.getRestaurantsByCuisine(this.searchText).subscribe((data: Restaurant[]) => {
        if (data.length > 0) {
          // If there are matching restaurants, display them
          this.restaurant = data;
        } else {
          // If no matching cuisine, search by restaurant name
          this.restaurantdata.getRestaurantByName(this.searchText).subscribe((restaurant: Restaurant) => {
            if (restaurant) {
              this.restaurant = [restaurant]; // Convert single object to an array
            } else {
              this.restaurant = []; // If no restaurant found by name, display empty array
            }
          });
        }
      });
    }
  }

  onclick(id: number) {
    this.router.navigate(['/menu', id]);
  }
}
