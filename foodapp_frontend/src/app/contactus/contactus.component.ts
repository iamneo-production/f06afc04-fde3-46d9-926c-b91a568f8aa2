import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor(private http: HttpClient) {}

  submitForm(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const nameInput = <HTMLInputElement>document.getElementById('name');
    const emailInput = <HTMLInputElement>document.getElementById('email');
    const messageInput = <HTMLInputElement>document.getElementById('message');
  
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
  
    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please provide all the required details.');
      return; // Stop the form submission
    }
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    this.http.post('https://8080-aaabcaeedefcbacfcdbceaeaadbdbabf.project.examly.io//contactus', formData, httpOptions)
      .subscribe(
        () => {
          // Handle success response
          console.log('Form submitted successfully.');
          alert('Form submitted successfully.');
        },
        (error) => {
          // Handle error response
          console.error('Error occurred while submitting the form:', error);
        }
      );
  }
  }
