import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ip-op-component',
  standalone: true,
  imports: [],
  templateUrl: './ip-op-component.component.html',
  styleUrl: './ip-op-component.component.css'
})
export class IpOpComponentComponent {
     // Input Decoretors to get input
        @Input() title: string = "";
        @Input() name: string = "";
        @Input() mobile: string = "";
        @Input() email: string = "";


  // OutPut Decoretors to give output (always event)
  //EventEmitter: Used in conjunction with @Output() to send data from child to parent.
  @Output() buttonClick = new EventEmitter<string>()

  buttonClickEventHandler(ev:any) {
        this.buttonClick.emit("Button Click");
            console.log("Input OutPut COmponent")
    }




      @Input() item = 0;
}
