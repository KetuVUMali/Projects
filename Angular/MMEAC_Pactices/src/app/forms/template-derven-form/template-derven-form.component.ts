import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-derven-form',
   standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './template-derven-form.component.html',
  styleUrl: './template-derven-form.component.css'
})
export class TemplateDervenFormComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value); // Log form data on submit
      alert('Form Submitted Successfully!');
    }
  }
}
