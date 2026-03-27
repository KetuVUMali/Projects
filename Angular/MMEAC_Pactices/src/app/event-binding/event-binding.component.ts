import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {


  buttonClick(e:any){
    alert('Button1 was clicked!');
  }


  buttonCLicked1(ev: any) {
    alert("Click2 On Me");
  }

  // ifMouseHover = false;
  // mouseOverHandler(ev: any) {
  //   console.log(ev);
  //   this.ifMouseHover = true;
  // }
  // mouseOutHandler(ev: any) {
  //   this.ifMouseHover = false;
  // }

  ifMouseOver = false;
  mouseOverHandler(ev:MouseEvent){
    console.log(ev);
    this.ifMouseOver = true;
  }

  mouseOutHandler(ev:MouseEvent){
    this.ifMouseOver = false;
  }



  onClickWithParam(message: string) {
    alert(message);  // Show the message passed as a parameter
  }


  onEnterPress() {
    alert('Enter key pressed!');
  }


  onClick() {
    alert('Button clicked!');
  }
  onMouseOver() {
    console.log('Mouse over the button!');
  }

///////////////////////////////////////////////////////////
getName(){
  alert("button Throught  Call  Fun");
}

getName2(name:any,age:any){
  alert ("OP IN Console");
  console.log(name,age)
}


////////////////////////////////////////////////////////////

userName : string = '';                 // To store the input value
onInputChange(event: any) {
  let n = event.target.value;  // Update userName with the input value
  this.userName = n;
}

// when key clicked afer relase i.e. called keyUp
getData(data: any) {
  console.log(data);
}

getData3(data:any){
  console.log(data);
}

onMouseMove(event: MouseEvent): void {
  const x = event.clientX;
  const y = event.clientY;
  // Log the coordinates in the console
  console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
}
}
