// this director used in Stuctural Directive


import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElement]',
  standalone: true
})
export class RedElementDirective {
  // this director used in Stuctural Directive
  constructor(ele:ElementRef) {
    ele.nativeElement.style.color = 'red';
    ele.nativeElement.style.backgroundColor = 'yellow';
    ele.nativeElement.style.fontSize = '30px';
    ele.nativeElement.style.fontStyle = 'italic';
   }

}
