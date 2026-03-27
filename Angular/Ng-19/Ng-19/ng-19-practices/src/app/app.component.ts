import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'ng-19-practices';    // property
                                // class inside this is called Property.
                                // we can write var directly inside class 
                                // class inside we write propertys and function ( we write werible class -> fun inside )

  demo(){
    let x = 10;
    let y;                       // x & y both called var
  }


  demo2(a:number,b:number)       //  Func Parameter. 
  {
    return a+b;
  }

  


}
