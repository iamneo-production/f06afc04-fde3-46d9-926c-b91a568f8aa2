import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Restaurant {
  id: number;
  name: string;
  description: string;
  menu_item_id: number;
  promotions: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string='';
  searchResults: Restaurant[]=[];

  constructor(private http: HttpClient) { }


  searchRestaurantByName(name: string) {
    return this.http.get<any>(`http://localhost:8080/restaurant/name?name=${name}`);
    
  }
  search() {
    this.searchRestaurantByName(this.searchQuery).subscribe(
      (response) => {
        if (response) {
          this.searchResults = [response]; // Assign the single result to the searchResults array
        } else {
          this.searchResults = []; // Clear the searchResults array
        }
      },
      (error) => {
        console.error(error); // Handle the error
      }
    );
  }
  
    
}
