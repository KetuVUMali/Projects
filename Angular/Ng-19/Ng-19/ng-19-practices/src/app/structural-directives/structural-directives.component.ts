import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [NgIf],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {

  display=true;
  // display=false;

  x=10;

  //
    display2=true;
    hidediv(){
      this.display2=!true;
      // this.display=false;
    }
    showdiv(){
      this.display2=true;
    }
    toggle(){
      this.display2=!this.display2
    }


  // 
  toggles=true;
  togleTwo(){
    this.toggles=!this.toggles;
  }

  //
  isLoggedIn=true;
  login(){
    this.isLoggedIn=!this.isLoggedIn;
  }


// Else-If
  color = 1;

  handleColorChange(Value: number) {
    this.color = Value;
  }

  handleInput(event:Event){
    this.color= parseInt((event.target as HTMLInputElement).value);
  }

// Switch Case

  colors = 'blue';
  handleColorsChange(value:string)
  {
    this.colors = value;
  }

  inputColors(event:Event)
    {
      this.colors = (event.target as HTMLInputElement).value
    }


// For Loop
  // Array
    user = ['Saurabh', 'Ketan', 'Jaimin', 'Thushar', 'Bhushan'];

  // Array as object
    students=[
              {
                name : 'Ketan',
                per : 67,
                course : 'MCA',
                email : 'ketan@gmail.com'
              },
              {
                name : 'Jaimin',
                per : 89,
                course : 'BCA',
                email : 'Jaimin@gmail.com'
              },
              {
                name : 'Jayesh',
                per : 77,
                course : 'IMCA',
                email : 'Jayesh@gmail.com'
              }
            ]

      getName(name:string)
            {
              alert("Name : "+name);
            }

      getData(data:any)
            {
              alert("Index No : "+data)
            }
}
