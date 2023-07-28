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
  showComplaints: boolean = false;
  customers: any[] = [];
  restaurants: any[] = [];
  complaints: any[] = [];
  filteredCustomers: any[] = [];
  filteredRestaurants: any[] = [];
  filteredComplaints: any[] = [];
  customerSearchTerm: string = '';
  restaurantSearchTerm: string = '';
  complaintSearchTerm: string = '';
  currentPage: number = 1;
  pageSize :any;


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

  toggleComplaints() {
    this.showComplaints = !this.showComplaints;
    if (this.showComplaints) {
      this.fetchComplaints();
    }
  }

  fetchCustomerDetails() {
    
    this.showComplaints = false;
    this.showRestaurant = false;
    this.http.get<any[]>('https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/customer')
      .subscribe(data => {
        this.customers = data;
        this.filteredCustomers = this.customers;
        this.pageSize = this.filteredCustomers.length; // Set the page size based on the number of customers

        
      });
  }

  fetchRestaurantDetails() {
          
    this.showCustomer = false;
    this.showComplaints = false;
    this.http.get<any[]>('https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/restaurant')
      .subscribe(data => {
  
        this.restaurants = data;
        this.filteredRestaurants = this.restaurants;
        this.pageSize = this.filteredCustomers.length; // Set the page size based on the number of customers

      });
  }

  fetchComplaints() {

    this.showCustomer = false;
    this.showRestaurant = false;
    this.http.get<any[]>('https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/contactus')
      .subscribe(data => {
        this.complaints = data;
        this.filteredComplaints = this.complaints;
        this.pageSize = this.filteredCustomers.length; // Set the page size based on the number of customers

      });
  }

  deleteCustomer(customer: any) {
    this.http.delete(`https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/customer/${customer.id}`, { responseType: 'text' })
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
    this.http.delete(`https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/restaurant/${restaurant.id}`, { responseType: 'text' })
      .subscribe(() => {
        this.restaurants = this.restaurants.filter(r => r.id !== restaurant.id);
        this.filteredRestaurants = this.filteredRestaurants.filter(r => r.id !== restaurant.id);
        window.alert('Restaurant deleted successfully');
      }, (error: any) => {
        console.error('Error deleting restaurant:', error);
        window.alert('Failed to delete restaurant');
      });
  }



  deleteComplaint(complaint: any) {
    this.http.delete(`https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io/contactus/${complaint.id}`, { responseType: 'text' })
      .subscribe(() => {
        this.filteredComplaints = this.filteredComplaints.filter(c => c.id !== complaint.id);
        window.alert('Complaint deleted successfully');
      }, (error: any) => {
        console.error('Error deleting complaint:', error);
        window.alert('Failed to delete complaint');
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

  filterComplaints() {
    const searchTerm = this.complaintSearchTerm.toLowerCase();
    this.filteredComplaints = this.complaints.filter(
      c => c.name.toLowerCase().includes(searchTerm) ||
        c.email.toLowerCase().includes(searchTerm) ||
        c.message.toLowerCase().includes(searchTerm)
    );
  }
}
