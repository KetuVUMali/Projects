import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-no-page-found',
  standalone: true,
  imports: [RouterLink,RouterLink],
  templateUrl: './no-page-found.component.html',
  styleUrl: './no-page-found.component.css'
})
export class NoPageFoundComponent {

}
