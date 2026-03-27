import { CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UsdToInrPipe } from '../Pipes Custom/usd-to-inr.pipe';
import { ReverseStringPipe } from '../Pipes Custom/reverse-string.pipe';
import { MultiplicationPipe } from '../Pipes Custom/multiplication.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe,DatePipe,LowerCasePipe,TitleCasePipe,
            CurrencyPipe,DecimalPipe,PercentPipe,
            JsonPipe,
            SlicePipe,
            I18nPluralPipe,I18nSelectPipe,
            //Custom Pipes Improt From "Pipe CUstom" Folder to Use custom pipe in this Component
            UsdToInrPipe, ReverseStringPipe, MultiplicationPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  // Pipes
  school = "SPDM college shirpur";
  currentdate = new Date();
  gender: string = 'male';

  genderMapping: { [k: string]: string } = {
    'male': 'He',
    'female': 'She',
    'other': 'They'
  };

  //json
  user={
    name:"Ketan",
    age:25,
    city:"Shirpur"}


}
