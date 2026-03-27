import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

   // Property Binding variables

   message:string = "Hello World";

   headig = "This is Heading";

  ClassList = "color";

  getID(){
    return this.headig;
  }




   h3title = "This Is title Property Binding on h3";
   title2 = "This Is innerText Property Binding on h3";
   innerText = "My Name Is Ketan";
   title3 = "This Is innerHTML Property Binding on h3";

  //  innerTextVar = "<i><mark>My Name Is Ketan</mark></i>";   // some error show for <i> </i> <mark></mark> in console but no problem for o/p
      innerTextVar = "My Name Is Ketan";

   title = 'Practices-Project';


  uname="Ketan";
  diable=false;

   imageUrl = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
   dynamicLink = "XXXXXXXXXXXXXXXXXXXXXX";
   isDisabled= true;


}
