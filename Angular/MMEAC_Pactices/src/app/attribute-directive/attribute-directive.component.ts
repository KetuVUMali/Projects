import { JsonPipe, NgClass, NgForOf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [FormsModule, JsonPipe,NgClass, NgForOf, NgStyle],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {


  ////////////////////////////////////////////////////////
  /// *ngModel

      // Form Variable are store in Object.
      // Every two way Data Binding each char is consider as a string.(Not Confirm)
      // student ={
      //   username:"",
      //   username1:"",
      //   dob:"",
      //   email:"",
      //   mob:"",
      // }
        student ={
          username:" Ketan Mali",
          username1:"KetanVUMali",
          dob:"03-12-2001",
          email:"ketanvumali311@gmali.com",
          mob:"9011862066",
        }

  name = 'John Doe';

  userAge: number = 18;

  selectedColor: string = 'red';

  selectedOption: string = 'option1';

  userBio: string = '';
        //
        userInput: string = '';
        updateValue(newValue: string) {
          this.userInput = newValue;
        }


  ///////////////////////////////////////

  // ngClass
  bgColor=1;     // value 1 or any

  // Property to determine if the button is active
  isActive: boolean = false;     // t or f apply class


  // Properties to apply different classes
  isError: boolean = false;
  isSuccess: boolean = true;





   // Classes to be applied
   activeClass: string = 'active';
   disabledClass: string = 'disabled';



   // Property to manage condition
  isSpecial: boolean = true;
  // Method to return class object
  getClass() {
    return {
      'special': this.isSpecial,    //  true
      'normal': !this.isSpecial     //  false
    };
  }


  // List of items with status
  items = [
    { name: 'Item 1', active: true },
    { name: 'Item 2', active: false },
    { name: 'Item 3', active: true }
  ];



//////////////////////////////////////////////////////

Active=true;

isActive4 = true;

  getStyles() {
    return {
      backgroundColor: this.isActive4 ? 'lightgreen' : 'lightcoral',
      fontSize: '20px',
      padding: '10px'
    };
  }


  color = 'blue';
  fontSize = '16px';
  margin = '10px';


  // object bind
  styles = {
    color: 'red',
    'font-weight': 'bold',
    'font-size': '24px',
  };


  studentList = [
      { name: "Ketan Mali", gender: "Male", dob: '03-12-2001',percentage:50 },
      { name: "Jay Sonvane", gender: "Male", dob: "12-04-2001",percentage:70  },
      { name: "Golu Patil", gender: "Male", dob: "26-08-2001" ,percentage:80 },
      { name: "Bhushan Patil", gender: "Male", dob: "19-05-2001" ,percentage:40 }
    ];


}
