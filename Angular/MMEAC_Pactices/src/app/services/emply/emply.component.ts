import { Component } from '@angular/core';
import { UserDataService } from '../User Services/user-data.service';

@Component({
  selector: 'app-emply',
  // standalone: true,
  // imports: [],
  templateUrl: './emply.component.html',
  styleUrl: './emply.component.css'
})
export class EmplyComponent {
  users:any[]=[];
  constructor(private userDetails : UserDataService){
    console.log("userDetails", userDetails.userData());
    this.users=userDetails.userData();
  }
}
