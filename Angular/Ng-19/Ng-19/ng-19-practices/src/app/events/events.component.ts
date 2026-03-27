import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  handleEvent()
    {
      console.log("Function Call");
    }

  clickEvent(e:MouseEvent)
    {
      console.log("Click_Event_Call",e)
      //console.log("Click_Event_Call - Value : ",e.value)
      console.log("Click_Event_Call - Type : ",e.type)
      console.log("Click_Event_Call - Target : ",e.target)
      //console.log("Click_Event_Call - Target-Name : ",e.target.name)      
      console.log("Click_Event_Call - Target-className : ",(e.target as Element).className)
      console.log("Click_Event_Call - Target-classList : ",(e.target as Element).classList)
      console.log("");
    }

  
    enterMouse(event:MouseEvent)
      {
        console.log("Mouse_Event_Call",event)
        console.log("Mouse_Event_Call - Type : ",event.type)
        console.log("Mouse_Event_Call - Target : ",event.target)
        console.log("");
      }

      leaveMouse(events:MouseEvent)
      {
        console.log("Mouse_Event_Call",events);
        console.log("Mouse_Event_Call - Type : ",events.type)
        console.log("Mouse_Event_Call - Target : ",events.target)
        console.log("");
      }
  
      inputEvent(events:Event)
      {
        console.log("Input_Event_Call",events)        
        console.log("Input_Event_Call - Value : ",(events.target as HTMLInputElement).value);
        console.log("Input_Event_Call - Type : ",events.type)
        console.log("Input_Event_Call - Target : ",events.target)
        console.log("");
      }

      focusEvent(events:Event)
      {
        console.log("Input_Event_Call",events)        
        //console.log("Input_Event_Call - Value : ",(events.target as HTMLInputElement).value);
        console.log("Input_Event_Call - Type : ",events.type)
        console.log("Input_Event_Call - Target : ",events.target)
        console.log("");
      }
}
