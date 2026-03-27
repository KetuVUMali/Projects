import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {  // StudentServiceService  -- > student-services.services.ts

  constructor() { }

  getStudents(){
          return [
            {name : "Ketan", age : 24 , gender : "Male"},
            {name : "Dhiraj", age : 25 , gender : "Male"},
            {name : "Pankaj", age : 25 , gender : "Male"},
            {name : "Harshal", age : 23 , gender : "Male"}
          ]
        }
}
