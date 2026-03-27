import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  // standalone: true,
  // imports: [],
  template: `
    <p> inline-template works!</p>
    <h1 class="inline"> I am Inline Template </h1>
  `,   // HTML Code IN Backtic
  styleUrl: './inline-template.component.css'
})
export class InlineTemplateComponent {

}
