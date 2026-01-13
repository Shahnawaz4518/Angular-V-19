import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './message';
import { Comp1 } from "./comp1/comp1";
import { Comp2 } from "./comp2/comp2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Comp1, Comp2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  _msg:string='';
  
  constructor(private _message:Message){
    //this._msg=_message.getmessage();
  }
  getmessage(){
    this._msg=this._message.getmessage();
  }





  // Singleton Service In Angular 19
}
