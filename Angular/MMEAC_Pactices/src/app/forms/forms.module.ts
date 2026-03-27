import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDervenFormComponent } from './template-derven-form/template-derven-form.component';
import { NgForm } from '@angular/forms';
import { SimpleFormComponent } from './simple-form/simple-form.component';



@NgModule({
  declarations: [ SimpleFormComponent,TemplateDervenFormComponent],
  imports: [ CommonModule ,NgForm , NgModule, FormsModule],
  exports: [ SimpleFormComponent,TemplateDervenFormComponent ]
})
export class FormsModule {

}
