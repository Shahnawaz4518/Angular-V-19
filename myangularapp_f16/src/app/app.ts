import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f16');

  count:number=0;


  // Below Using 3 Methods Counter App



  // increment (){
  //   this.count=this.count+1;
  // }

  // reset (){
  //   this.count=0;
  // }

  // decrement (){
  //   this.count=this.count-1;
  // }





  // Below Using Single Method Counter App 

  onchange(val:any){
    if(val=='plus'){
      this.count=this.count+1;
    }else if(val=='minus'){
      this.count=this.count-1;
    }else{
      this.count=0;
    }
  }



}
