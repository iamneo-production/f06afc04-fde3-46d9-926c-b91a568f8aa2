import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  showCustomer: boolean = false;
  showRestaurant: boolean = false;
  customers: any[] = [];
  restaurants: any[] = [];
  filteredCustomers: any[] = [];
  filteredRestaurants: any[] = [];
  customerSearchTerm: string = '';
  restaurantSearchTerm: string = '';

  constructor(private http: HttpClient) {}

  toggleCustomer() {
    this.showCustomer = !this.showCustomer;
    if (this.showCustomer) {
      this.fetchCustomerDetails();
    }
  }

  toggleRestaurant() {
    this.showRestaurant = !this.showRestaurant;
    if (this.showRestaurant) {
      this.fetchRestaurantDetails();
    }
  }

  fetchCustomerDetails() {
    this.http.get<any[]>('http://localhost:8080/customer')
      .subscribe(data => {
        this.customers = data;
        this.filteredCustomers = this.customers;
      });
  }

  fetchRestaurantDetails() {
    this.http.get<any[]>('http://localhost:8080/restaurant')
      .subscribe(data => {
        this.restaurants = data;
        this.filteredRestaurants = this.restaurants;
      });
  }

  deleteCustomer(customer: any) {
    this.http.delete(`http://localhost:8080/customer/${customer.id}`, { responseType: 'text' })
      .subscribe(() => {
        this.customers = this.customers.filter(c => c.id !== customer.id);
        this.filteredCustomers = this.filteredCustomers.filter(c => c.id !== customer.id);
        window.alert('Customer deleted successfully');
      }, (error: any) => {
        console.error('Error deleting customer:', error);
        window.alert('Failed to delete customer');
      });
  }

  deleteRestaurant(restaurant: any) {
    this.http.delete(`http://localhost:8080/restaurant/${restaurant.id}`, { responseType: 'text' })
      .subscribe(() => {
        this.restaurants = this.restaurants.filter(r => r.id !== restaurant.id);
        this.filteredRestaurants = this.filteredRestaurants.filter(r => r.id !== restaurant.id);
        window.alert('Restaurant deleted successfully');
      }, (error: any) => {
        console.error('Error deleting restaurant:', error);
        window.alert('Failed to delete restaurant');
      });
  }

  filterCustomers() {
    const searchTerm = this.customerSearchTerm.toLowerCase();
    this.filteredCustomers = this.customers.filter(c => c.name.toLowerCase().includes(searchTerm));
  }

  filterRestaurants() {
    const searchTerm = this.restaurantSearchTerm.toLowerCase();
    this.filteredRestaurants = this.restaurants.filter(r => r.name.toLowerCase().includes(searchTerm));
  }
}
