import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { Routes } from '@angular/router';
import { GenralComponent } from './genral/genral.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { InlineBothComponent } from './inline-style-template/inline-both/inline-both.component';
import { InlineStyleComponent } from './inline-style-template/inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-style-template/inline-template/inline-template.component';

export const routes: Routes = [
// simple Routing (Static Routing)
  {  path : "genral",    component:GenralComponent },
  {  path : "pipes",  component:PipesComponent },
  {  path : "structural-directives",  component : StructuralDirectivesComponent },
  {  path : "app-compoent",  component : AppComponent  },

// Dynamic Routing
{  path : "genral/:id",    component:GenralComponent },
{  path : "pipes/:id",  component:PipesComponent },
{  path : "structural-directives/:id",  component : StructuralDirectivesComponent },
{  path : "app-compoent/:id",  component : AppComponent  },

// 404 Page Not Found
// { path : '**', component : NoPageFoundComponent },   // Some Problem Facing But Its Work

// Child Routing Not Working
{ path : "inline-both", component :InlineBothComponent,
  children : [
    { path : "inline-style", component : InlineStyleComponent},
    { path : "inline-template", component : InlineTemplateComponent},
    { path: '', redirectTo: 'inline-style', pathMatch: 'full' }
  ]
 }










];
