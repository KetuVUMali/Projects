import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  declarations: [AddStudentComponent],    // component , services  (Decleare Component)
  imports: [ CommonModule ],              // component , Pipes
  exports: [AddStudentComponent]        // export Component
})
export class StudentModule { }
