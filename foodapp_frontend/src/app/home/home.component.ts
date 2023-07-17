<<<<<<< HEAD
import { Component } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 099de46 (updated the home and search components for home screen)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
<<<<<<< HEAD
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
=======
  restaurant:any;
  constructor(private food:FoodService){
    this.food.restaurant().subscribe((data: any)=>{
      console.log("data",data)
      this.restaurant=data;
    })
  }
}
>>>>>>> 099de46 (updated the home and search components for home screen)
