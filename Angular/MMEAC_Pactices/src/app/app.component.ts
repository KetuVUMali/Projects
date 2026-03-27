// app component TS File

import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterLink, RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StudentModule } from './student/student.module';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { JsonPipe, NgFor } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';
import { IpOpComponentComponent } from './ip-op-component/ip-op-component.component';
import { LifeCycleComponentComponent } from './life-cycle-component/life-cycle-component.component';
import { InlineStyleTemplateModule } from './inline-style-template/inline-style-template.module';
import { GenralComponent } from './genral/genral.component';
import { AdditionalPracticesModule } from './additional-practices/additional-practices.module';
import { ChildToParentDataComponent } from './child-to-parent-data/child-to-parent-data.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDervenFormComponent } from "./forms/template-derven-form/template-derven-form.component";
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ServicesModule } from './services/services.module';

@Component({
  selector: 'app-root',            // This is the custom HTML tag for the component
  standalone: true,
  imports: [
    InterpolationComponent, 
    StudentModule,
    EventBindingComponent, PropertyBindingComponent,
    StructuralDirectivesComponent, NgFor, AttributeDirectiveComponent, FormsModule, JsonPipe,
    IpOpComponentComponent,ChildToParentDataComponent,         // comp in op
    LifeCycleComponentComponent,            // life cycle anout comp
    InlineStyleTemplateModule,              // Reduce code length
    GenralComponent, AdditionalPracticesModule,   //GenralComponent is module(by mistake comp. name set)
    PipesComponent,                          // pipes for data display
    FormsModule, FormsModule, SimpleFormComponent, TemplateDervenFormComponent,  // Forms Module
    RouterOutlet,RouterLink,            // Routing
    NoPageFoundComponent,                // 404 Page Error Page
    ServicesModule,                      // Services Module

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {       // TS Section
  title = 'MMEAC_Pactices';

  student ={
    username:" Ketan Mali",
    username1:"KetanVUMali",
    dob:"03-12-2001",
    email:"ketanvumali311@gmali.com",
    mob:"9011862066",
  }
//////////////////////////////////// INPUT OUTPUT COMPONENT//////////////////////////////////

  student1 = {
        title: "Student Details",
        name: "Ketan Mali",
        mobile: "9988776655",
        email: "ketan@gmail.com",
    }
      // op details show
    buttonClickEventHandler(ev:any)	{
      console.log(ev);
      console.log("I/O  app component");
      console.log(this.student1);
    }

    // Input Data for child component from parent compnent
    data = 10;

    updateChild(){
      // this.data = this.data + 1;
      // this.data = Math.random()*100;
      this.data = Math.floor(Math.random()*100);
    }

  ////////////////////////////////////// child to parent data share component //////////////////////////////////////

  demo=""
  updateData(items:any){
  console.log(items);
    this.demo=items;
}

///////////////////  Dynami Routing To Get Id//////////////////////////////
constructor(private route : ActivatedRoute){
  console.log("User id is ", this.route.snapshot.paramMap.get('id'))
}

////////////////////////////////////////////////////////////////////

}
