import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f7');

  //1.---> Interpolation Data Binding
//   city="Mumbai";


//   changecity(){
//      this.city="New Delhi";
//   }


// // Interpolation Perform all Mathematical Operation
// num1=200;
// num2=100;

// Company={
//   name:'XYZ PVT LTD',
//   city:'Mumbai',
//   state:'Maharashtra',
//   country:'India'
// }



// Error Handling In Interpolation
// Company:any;










//2.---> Attribute Data Binding In Angular 19


}
