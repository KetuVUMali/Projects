import { CommonModule, NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Directive } from '@angular/core';
import { RedElementDirective } from '../Custom Directive/red-element.directive';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [NgFor,NgIf, NgSwitch, NgSwitchCase,NgSwitchDefault,NgClass,
            RedElementDirective
          ],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {


  ////////////////////  *ngfor //////////////////////////////


  arr = ["A","B","C","D","E","F"];

  // studentList = [
  //   { name: "Ketan Mali", gender: "Male", dob: '03-12-2001',percentage:60 },
  //   { name: "Jay Sonvane", gender: "Male", dob: "12-04-2001",percentage:70  },
  //   { name: "Golu Patil", gender: "Male", dob: "26-08-2001" ,percentage:80 },
  //   { name: "Bhushan Patil", gender: "Male", dob: "19-05-2001" ,percentage:90 }
  // ];


  studentList = [{
    name: "John Doe",
    gender: "Male",
    dob: "24-10-2021",
    percentage: 70
  },{
    name: "Mahesh Das",
    gender: "Male",
    dob: "26-02-1957",
    percentage: 90
  },{
    name: "Suresh Kulkarni",
    gender: "Male",
    dob: "30-12-1999",
    percentage: 35
  },{
    name: "Mahesh Kulkarni",
    gender: "Male",
    dob: "30-12-1999",
    percentage: 80
  }];



  items = ['Demo 1', 'Demo 2', 'Demo 3'];

  // obj
  users = [
    { name: 'John', age: 25 },
    { name: 'Doe', age: 30 },
    { name: 'Jane', age: 28 }
  ];



  users1 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
    { id: 3, name: 'Jane' }
  ];

  // Custom trackBy function
  trackByUserId(index: number, user: any): number {
    return user.id; // Return a unique identifier for each user
  }

// multi dimentional array
    empl=[
      {name:"A",age:22,acc:["YT","G","Insta"]},
      {name:"B",age:23,acc:["Yahoo","G","Insta"]},
      {name:"C",age:24,acc:["LinkedIn","G","Insta"]},
      {name:"D",age:25,acc:["Mojila","G","Insta"]},
      {name:"E",age:26,acc:["Bingo","G","Insta"]}
    ]


    //////////////////////// *ngIf ///////////////////////////////////

    showContent = false;

    showDiv(e:any){
      this.showContent = true;
      console.log(this.showContent)
    }

    togleDiv(e:any){
      this.showContent = !this.showContent;
      console.log(this.showContent)
    }

    isLoggedIn = true; // Change this value to false to hide the div

    isLoggedIn2 = false;

    isAdmin = false; // Change this to true to display the message

    userLoggedIn = true;


    user = { name: 'John Doe', age: 30 }; // Assign this to null to hide the div


    show1 = true;
    show2 = false;

    show3 = true;
    // show3 = false;

    show4 = true;

    show5 = "data";
    //show5 = "demo";

  ////////////////////// *ngSwitchCase //////////////////////////////


  color = 'blue';

  day = 3; // You can change the number to test other days

  fruit = 'grape'; // Change this value to 'apple', 'banana', 'orange', or something else

  status = 'loading'; // Change this to 'success', 'error', or anything else



  currentPermission = 'edit';


    //////////////////////////////////////////////////////////////////////
    colour = 'red';
    //colour = 'green';
    //colour = 'blue';


  ////////////////////custom Directive ///////////////////////

  //  haspermission = true

}
