import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
}
