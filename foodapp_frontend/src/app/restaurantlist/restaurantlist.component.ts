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
<<<<<<< HEAD
  cuisineTypes: string[] = [];
=======
  cuisineType = '';
>>>>>>> 10bc20662fe349f08226a0b011e88abd0e338aa3

  constructor(
    private restaurantdata: RestaurantdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'] || '';
<<<<<<< HEAD
      const cuisineTypeParam = params['cuisineType'];
      this.cuisineTypes = cuisineTypeParam ? cuisineTypeParam.split(',') : [];
=======
      this.cuisineType = params['cuisineType'] || '';
>>>>>>> 10bc20662fe349f08226a0b011e88abd0e338aa3
      this.getRestaurants();
    });
  }

  getRestaurants() {
<<<<<<< HEAD
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
=======
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
    this.restaurantdata.restaurantId = id;
    this.router.navigate(['/menu']);
  }
>>>>>>> 10bc20662fe349f08226a0b011e88abd0e338aa3
}