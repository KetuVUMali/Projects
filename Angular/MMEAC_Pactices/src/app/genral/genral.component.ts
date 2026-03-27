
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { title } from 'process';

@Component({
  selector: 'app-genral',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './genral.component.html',
  styleUrl: './genral.component.css'
})
export class GenralComponent {
  title = 'genral';
  /////////////////////////////////////////
  displayValue = ''; // Property to store the input value

  // Method to get the value from the input field and update 'displayValue'
  getValue(value: string) {
    console.log(value); // Log the value passed
    this.displayValue = value; // Assign the value to 'displayValue'
    console.log(this.displayValue); // Log the updated value
  }

  displayValue2 = '';
  getValue2(value: string) {
    console.log(value);
    this.displayValue2 = value;
    //console.log(this.displayValue2);
  }


  displayValue3 = '';
  getValue3(value: string) {
    console.log(value);
    this.displayValue3 = value;
    //console.log(this.displayValue3);
  }

  ////////////////////// Counter ///////////////////////

  // num = 0;
  // increment(){
  //   this.num++;
  //   console.log(this.num);
  // }
  // decerment(){
  //   this.num--;
  //   console.log(this.num);
  // }
  count = 0;
  counter(type:string){
    type === "add" ? this.count++ : this.count--;
    //type === "sub" ? this.count-- : this.count++;
  }

////////////////////// Style Binding //////////////////////////////

design='red';

design2='red';
updateColour(){
  this.design2 = (this.design2 === 'red') ? 'green' : 'red';
  // this.design2 ="blue";
}

bgColour = "red";
updateColour2(){
  this.bgColour = (this.bgColour === 'red') ? 'green' : 'red';
  // this.bgColour ="red";
}

design3="red";
bgColour2="green"
updateColour3(){
  this.bgColour2 = (this.bgColour2 === 'red') ? 'green' : 'red';
  this.design3 = (this.design3 === 'red') ? 'green' : 'red';
}
///////////////// Simple Forms //////////////////////////
userData:any = {};

formData(data:any){
  console.warn(data);
  this.userData = data;
}

////////////////// toggle /////////////////////////
 display = false;
 toggle(){
  // this.display =true;
  this.display = !this.display;
 }

 show = false;
 toggle2(){
  this.show = !this.show;
 }


/////////////// Todo List////////////////////
list : any[] = [];
addTask(items:string){
  // console.warn(this.list);
  this.list.push({id:this.list.length, name : items });
  console.warn(this.list);
}
remove(id:number){
this.list = this.list.filter(item => item.id !== id);
console.log(this.list);
}


//////////////////// Template Refences Variabl///////////////////////////
variable: string = "";
onClickButton(data: any) {
  this.variable = data;
  console.log("Input value:", data); // Should print input value to the console
}

variable2: string = "";
onClickButton2(datax: any) {
  this.variable2 = datax;
  console.log("Input value:", datax); // Should print input value to the console
}

////////////////////////////////////

////////////////////////////////////

/////////////////////////////////////

//////////////////////////////////

////////////////////////////////////////

/////////////////////////////////////

///////////////////////////////////

////////////////////////////////////////

}
