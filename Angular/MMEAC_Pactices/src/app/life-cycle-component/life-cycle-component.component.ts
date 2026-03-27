import { AfterViewInit, Component, EventEmitter, Input, input, OnChanges, OnDestroy, OnInit, Output, output, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-life-cycle-component',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-component.component.html',
  styleUrl: './life-cycle-component.component.css'
})
export class LifeCycleComponentComponent implements OnInit,OnDestroy,OnChanges,AfterViewInit,OnDestroy{


constructor(){
  console.log("Invoke Constructor");
}

ngOnInit() {
    console.log("Invoke Constructor");
  }

ngOnInitOnInit(){
  console.log("Invoke ngOnInit");
}


ngOnDestroy() {
  console.log("Invoke ngOnDestroy");
}

ngOnChanges(changes: SimpleChanges) {
  console.log("Invoke ngOnChanges");
}

ngAfterViewInit() {
  console.log("Invoke ngAfterViewInit");
}

ngOnDestory(){
  console.log("Invoke ngDestory");
}

}
