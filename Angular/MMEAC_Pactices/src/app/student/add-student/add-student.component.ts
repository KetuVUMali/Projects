import { Component } from '@angular/core';
import { StudentServiceService } from './Services/student-service.service';
@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  studentlist:any;
  constructor(public studentservices : StudentServiceService)       // StudentServiceService  -- > student-services.services.ts (export class StudentServiceService)
  {
    this.studentlist = this.studentservices.getStudents();
  }
}
