import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {



// seprate Function
count1 : number = 0;

  handleInc(){ this.count1 = this.count1 + 1; }

  handleDec(){ this.count1 = this.count1 - 1; }

  handleRes(){ this.count1 = 0 }

// single Fun  &  negeative ounter Remove

count2 : number = 0;

   handleCount(type : string)
   {
    if(type === 'inc')
      { this.count2 = this.count2 + 1; }
    else if(type === 'dec')
      { 
          if(this.count2 >0)
            {
              this.count2 = this.count2 - 1;
            }
      }
    else{ this.count2 = 0; }
  }

}
