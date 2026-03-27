import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { UserComponent } from './user/user.component';
import { EmplyComponent } from './emply/emply.component';



@NgModule({
  declarations: [ UserComponent,EmplyComponent ],
  imports: [    CommonModule,NgFor  ],
  exports:[UserComponent,EmplyComponent]
})
export class ServicesModule { }
