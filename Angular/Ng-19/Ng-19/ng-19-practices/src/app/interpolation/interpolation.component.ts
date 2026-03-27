import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {

  // Interpolation variables
 myname = "Ketan Mali";

 x = 10;
 y = 20;
 //a = x + y;                      Error Show Cannot find name 'x'
 a = this.x + this.y;
 b = this.x - this.y;
 c = this.x * this.y;
 d = this.x / this.y;
 e = this.x % this.y;
 f = this.x < this.y ? "X is small" : "Y is small";

 name() {
  return "Ketu Demo";
}

add(k: number, m: number) {
  return m + k;
}

 isLoggedIn = true;

 hii = "color";

 userName: string = 'Ketan';               // TS
 age: number = 25;                         // TS

 getGreeting(): string {
          return `Hello, ${this.userName}!`;      // Hellow, Ketan!
        }

        uname="Ketan";

}
