import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  userData(){
    return[
      { id:1, name:'Dhiraj',  age:25,  email:'Dhiraj@gmail.com' },
      { id:2, name:'Harshal',  age:26,  email:'Harshal@gmail.com' },
      { id:3, name:'Pankaj',  age:25,  email:'Pankaj@gmail.com' },
      { id:4, name:'Vishal',  age:24,  email:'Vishal@gmail.com' },
      { id:5, name:'Nilesh',  age:24,  email:'Nilesh@gmail.com' },
      { id:6, name:'Katan',  age:24,  email:'Katan@gmail.com' }
    ]
  }
}
