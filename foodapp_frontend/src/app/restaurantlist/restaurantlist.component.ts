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
    this.restaurantdata.restaurants().subscribe((data: any) => {
      if (this.searchText.trim() === '') {
        if (this.cuisineType.trim() !== '') {
          this.restaurant = data.filter((item: Restaurant) => item.cuisinetype.toLowerCase().includes(this.cuisineType.toLowerCase()));
        } else {
          this.restaurant = data;
        }
      } else {
        const searchResultByName = data.filter((item: Restaurant) =>
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        );

        const searchResultByCuisine = data.filter((item: Restaurant) =>
          item.cuisinetype.toLowerCase().includes(this.searchText.toLowerCase())
        );

        // Merge both search results (removing duplicates)
        this.restaurant = [...new Set([...searchResultByName, ...searchResultByCuisine])];
      }
    });
  }

  onclick(id: number) {
    this.router.navigate(['/restaurantdetails', id]);
  }
}
