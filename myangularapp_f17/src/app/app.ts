import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from './cart';
import { Product } from "./product/product";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f17');


  // Tutorial Reference




  // x=0;

  // count=signal(0);

  // num1=signal(10);

  // num2=signal(10);

  // //result=this.num1+this.num2;

  // result = computed(()=>this.num1()+this.num2());

  // constructor(){
  //   //console.log(this.x);
  //   //console.log(this.count());


  //   // if we want to track count value 

  //   // effect(()=>{
  //   //   console.log(this.count());
  //   // })

  // }

  // setvalue(){
    
  //   // this.x=this.x+1;

  //   // this.count.set(this.count()+1);

  //   console.log(this.result());

  //   this.num2.set(200);

  //   console.log(this.result());
  // }




  //Self Practice


  constructor(public cart: Cart) {}



}
