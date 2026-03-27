import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineBothComponent } from './inline-both/inline-both.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';



@NgModule({
  declarations: [InlineBothComponent,InlineStyleComponent,InlineTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InlineBothComponent,InlineStyleComponent,InlineTemplateComponent
  ]
})
export class InlineStyleTemplateModule { }
