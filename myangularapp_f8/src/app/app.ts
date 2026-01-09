import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomePipe } from './welcome-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, WelcomePipe,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f8');

  // Build-In- Pipes In Angular 19
  // name="Shahnawaz Khan";

  // _msg="Welcome To Angular Tutorial Playlist..";

  // company={
  //   name:"Abc pvt ltd",
  //   city:"Mumbai",
  //   state:"Maharashtra",
  //   country:"India"
  // }

  // employees:any[]=[
  //   {id:100,name:'rohit sharma',country:'India'},
  //   {id:101,name:'glenn maxwell',country:'Australia'},
  //   {id:102,name:'elon musk',country:'USA'},
  //   {id:103,name:'virat kohli',country:'India'},
  //   {id:104,name:'ben Stocks',country:'UK'},
  // ]





  // Decimal and Precentage Pipes In Angular 19


  // num1=2.5;



  // Currency Pipes In Angular 19

  // curr=45.32;




  // Date Pipes In Angular 19

  // currentDate=new Date();




  // Parameterize & Chaining Pipes In Angular 19

  // name="Angular Learning Playlist";
  // num=12.20;


  // // Chaining  Pipes
  // currentDate=new Date();







  // Custom Pipes In Angular 19 [Here we Build Own Pipes]

  name="Hello Welcome To Angular 19 Learning Phase"; 
}
