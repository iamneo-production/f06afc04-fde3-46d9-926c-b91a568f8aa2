import { Component } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurant: any;
  searchText = '';

  constructor(private food: FoodService, private router: Router) {
    this.food.restaurant().subscribe((data: any) => {
      this.restaurant = data;
    });
  }

  onSearch() {
    if (this.searchText.trim() !== '') {
      this.router.navigate(['/restaurantlist'], { queryParams: { search: this.searchText } });
    }
  }

 onCardClick(itemName: string) {
  this.router.navigate(['/restaurantlist'], { queryParams: { cuisineType: itemName.toLowerCase() } });
}

}