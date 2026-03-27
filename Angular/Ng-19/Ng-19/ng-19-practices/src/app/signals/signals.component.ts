import { Component, effect, signal, WritableSignal, computed, Signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

// Basic Signals :
  // Normal Property 
    x = 10;


  // Define Signals
    // 1. Import Sinals
    // 2. Create signal property (Inside class var is called proprty)

      value = signal(10);


    //
      values = signal(10);



    // 
    count = signal(0); // Creating a signal with initial value 0

    increment() {
      this.count.set(this.count() + 1); // Updating the signal
    }
  
    decrement() {
      this.count.set(this.count() - 1);
    }
      
  // Check Upadate Signals value
    // Crate a Signal
      svalue = signal(0)

    // see Updated Signal value
      constructor()
        { 
            effect(()=>{console.log("Signal S-Value : "+this.svalue())});

            // Effect   Counting Example Last
               effect(() => {
                console.log('Counting:', this.counting());
              });

            // Effect   DisplayValue  Toggle
                  effect(() => {
                    if(this.displayValue()%2==1)
                      {
                        this.display2=true;
                        setTimeout(()=>{this.display2=false;},2000)
                      }
                    else  
                      {
                        this.display2=false;
                      }
                  });

        }
    
    // Update Signal Value
        updatesValue()
          {
            if(this.svalue() >=0)
                {
                  this.svalue.set(this.svalue()+1)
                }
          }

        reset()
          {
            this.svalue.set(0);
          }

        decrementValue()
          {
            if(this.svalue() >0)
                {
                  this.svalue.set(this.svalue()-1)
                }
          }




// Data Type With Signals
    // Create a Signal
        data = signal(0);
          
    // Update Signal
        updateData()
          {
            // this.data.set('Demo');         // Give Erroe bacuse Signal is Number Created.
            this.data.set(this.data()+1);     // Then We Wont to set data type og Signal
          }


    // Number & String Signal
      // 1. Define Data Type For Signals      
        data2 = signal<number | string>(10)
        updateData2()
          {             
            this.data2.set('Hello'+1);            
          }

      // 2. Define Data Types For Values     
      data3 : WritableSignal<number | string>= signal(10)
      updateData3()
        {             
          this.data3.set('Hello'+1);            
        }


  // Computed Signals
        // computed Signal Value Never Changable    BUT it is possible
            data4 :Signal<number> = computed( ()=>200)
            updateData4()
                {
                  // this.data4.set(100);    // Give error value is not changeable.
                  alert("Computed Signal Value Never Changable");
                }

        // Computed Signal Value Change When Its is depend upon another signla.
          // Ex. 1
              // A normal signal
                countx = signal(5); 

              // Computed Signal: Automatically updates when `count` changes
                doubleCount = computed(() => this.countx() * 2);
      
              // Value Change Compute dependent Signal
                incrementx() {
                    this.countx.set(this.countx() + 1);
                  }

          // Ex. 2
                a = signal(10);
                b = signal(20);
                c = computed(() => this.a() + this.b());  // 30
                UpdateComputed()
                  {
                    console.log(this.c());                // 30
                    this.a.set(100);
                    console.log(this.c());                // 120
                    // this.c.set(1000000);               // Give Error Because C. S. Not change directly
                  }





   // Writeable Signals
   data5 = signal(10)
   // Writeable Signal Value Changable
   updateData5()
       {
        this.data5.set(this.data5()+10);  
       }

  // Update() Signals Value
  data6 = signal<number>(10)
  // Writeable Signal Value Changable
  updateData6()
      {
       this.data6.update((val)=>val+1);  
      }
      
  //  Effect : 
       // Signal state
          counting = signal(0);
      //  Effect
          // Up side in constructor
              
            
       // Update Signal
          updateCount() {
            this.counting.set(this.counting() + 1);
          }

      // Toggle Button 
         display = false;
         toggle(){ this.display = !this.display; }
      
      // Toggle with Signal
          displayValue = signal(0)
          display2 = false;
          toggle2()
            {
               this.displayValue.set(this.displayValue() + 1); 
            }



// Extra Logic 
 p=10;
 q=20;
 z=this.p+this.q;             // 30
 show()
  {
    console.log(this.z);      // 30
    this.p=100;
    console.log(this.z)       // 30
  }
 show2()
  {
    console.log(this.z);      // 30
    this.p=100;
    this.z=this.p+this.q;     // 120      // this line releated to compute signal value change example.
    console.log(this.z)       // 120
  }
}
