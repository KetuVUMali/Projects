import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  // standalone: true,
  // imports: [],
  templateUrl: './inline-style.component.html',
  styles: `
          .inline{
            color: red;
            font-size: 20px;
          }
        `
})// CSS code inside bactics
export class InlineStyleComponent {

}
