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

    const formData = {
      name: (<HTMLInputElement>document.getElementById('name')).value,
      email: (<HTMLInputElement>document.getElementById('email')).value,
      message: (<HTMLInputElement>document.getElementById('message')).value
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post('http://localhost:8080/contactus', formData, httpOptions)
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
