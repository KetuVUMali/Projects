import { Component } from '@angular/core';

@Component({
  selector: 'app-button-click',
  imports: [],
  templateUrl: './button-click.component.html',
  styleUrl: './button-click.component.css'
})
export class ButtonClickComponent {

  clickMe() {
    alert("Function Call");
  } 


  // one function call inside another function.
  first(){
    console.warn("First Function");
    this.second();                  // another fun call
  }


  second(){
    console.warn("Second Function");
  }



  // Value Get & Set 

  
  //
      name1=" ";
      getName1(data:Event)
        {
          this.name1=(data.target as HTMLInputElement).value;
        }

  //
      value=" ";
      name2=" ";
      // value Get from Input
        getName2(data:Event)
          {
            this.value=(data.target as HTMLInputElement).value;
          }
      // Button Click Value Display    
        setName1()
          {
            this.name2=this.value;
          }

    // Template Reference Variable
        email=" ";
        getEmail(data:string)
          {
            this.email=data;
          }
        
        setEmailId ="";
        setEmail()
          {
            this.setEmailId="Default-Email"
          }


  // 
        variable:string="";
        onClick(data:string)
          {
            this.variable = data;
            console.log(data);
          }
  





}
