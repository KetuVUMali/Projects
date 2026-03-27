import { Component } from '@angular/core';
import { UserDataService } from '../User Services/user-data.service';

@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users:any[]=[];
  constructor(private userDetails : UserDataService){
    console.log("userDetails", userDetails.userData());
    this.users=userDetails.userData();
  }

}
