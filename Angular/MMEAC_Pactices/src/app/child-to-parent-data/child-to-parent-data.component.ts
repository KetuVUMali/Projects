import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './child-to-parent-data.component.html',
  styleUrl: './child-to-parent-data.component.css'
})
export class ChildToParentDataComponent {

  @Output() updateDataEvent = new EventEmitter<string>();

}
