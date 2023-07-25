import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurantdashboard.component.html',
  styleUrls: ['./restaurantdashboard.component.css']
})
export class RestaurantdashboardComponent implements OnInit {
  menuItems: any[] = [];
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  newMenuItem: any = {};
  editedMenuItem: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMenuItems();
  }

  fetchMenuItems(): void {
    this.http.get<any[]>('https://8080-bfdadceabdbcdeacfcdbceaeaadbdbabf.project.examly.io/menu-item').subscribe(
      (response) => {
        this.menuItems = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.newMenuItem = {};
  }



  
  onAddSubmit(): void {
    // Check if any of the required fields are empty
    if (!this.newMenuItem.name || !this.newMenuItem.price) {
      alert('Name and Price are required fields.');
      return; // Exit the function if any field is empty
    }

    this.http.post('https://8080-bfdadceabdbcdeacfcdbceaeaadbdbabf.project.examly.io/menu-item', this.newMenuItem).subscribe(
      () => {
        this.showAddForm = false; // Hide the form after successful addition
        this.fetchMenuItems(); // Refresh the data after successful addition
        this.newMenuItem = {}; // Reset the new menu item object
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openEditModal(menuItem: any): void {
    this.showEditForm = !this.showEditForm;
    this.editedMenuItem = { ...menuItem }; // Creating a copy of the selected menu item
    
  }

  onEditSubmit(): void {
    this.http.put(`https://8080-bfdadceabdbcdeacfcdbceaeaadbdbabf.project.examly.io/menu-item/${this.editedMenuItem.id}`, this.editedMenuItem).subscribe(
      () => {
        this.showEditForm = false; // Hide the edit form after successful edit
        this.fetchMenuItems(); // Refresh the data after successful edit
        this.editedMenuItem = {}; // Reset the edited menu item object
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelEdit(): void {
    this.showEditForm = false; // Hide the edit form without saving changes
    this.editedMenuItem = {}; // Reset the edited menu item object
  }
  
  deleteMenuItem(menuItem: any): void {
    const confirmed = confirm(`Are you sure you want to delete ${menuItem.name}?`);
    if (confirmed) {
      this.http.delete(`https://8080-bfdadceabdbcdeacfcdbceaeaadbdbabf.project.examly.io/menu-item/${menuItem.id}`, { responseType: 'text' }).subscribe(
        (response) => {
          console.log('Delete Response:', response);
          this.fetchMenuItems(); // Refresh the data after successful deletion
        },
        (error) => {
          console.log('Delete Error:', error);
          this.fetchMenuItems(); // Refresh the data even if there's a parsing error
        }
      );
    }
  }
  
  getTotalItems(): number {
    return this.menuItems.length;
  }
  
}
