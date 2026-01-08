import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
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

// col=2;



//3.----> Style Binding In Angular 19
// color="purple";
// bold=true;

// isbold=true;


//4.----> Class Binding In Angular 19
// classesToApply="boldClass italicClass";





//5.---> Property Binding In Angular 19

// name="Rohit Sharma";
// imgpath="PBA-QR-CODE.jpg";




//6.---> Interpolation VS Property Binding

// currentvalue=true;

// enabledisable(){
//   this.currentvalue=!this.currentvalue;
// }





//7.--->Event Data Binding In Angular 19 View ---> Component

// click1(){
//   console.log("Click 1 Fired");
// }
// keyup(){
//   console.log("keyup fired");
// }
// keydown(){
//   console.log("keydown fired");
// }




// _message="Hello World";

// setmessage(val:any){
//   this._message=val;
// }





// 8.----> Two Way Data Binding In Angular - 19


_message="Hello World !!";

// setmessage(val : any){
//   this._message=val;
// }
}
