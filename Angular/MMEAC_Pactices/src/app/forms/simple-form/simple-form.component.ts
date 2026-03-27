import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

 // Array to store submitted form data
 submittedUsers: any[] = [];

 // Method to handle form submission
 userlogin(form: any) {

   this.submittedUsers.push({...form.value});   // Push form data into submittedUsers array
   console.log('Form Submitted', form.value);  // Log form values to the console

   // Reset the form after submission
   form.reset();
 }
}
