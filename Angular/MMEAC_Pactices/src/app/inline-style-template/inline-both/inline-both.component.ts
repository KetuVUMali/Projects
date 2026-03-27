
import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-both',
  // standalone: true,
  // imports: [],
  template: `
    <p> inline-template works!</p>
    <h1 class="inline"> I am Inline-Both </h1>

  `,
  styles: ` .inline{color: red; font-size: 20px;}  `
})
export class InlineBothComponent {

}
