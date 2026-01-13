import { Injectable } from '@angular/core';
import { Othermessage } from './othermessage';

@Injectable({
  providedIn: 'root',
})
export class Message {

  _message="Hello Welcome To Angular Tutorail Learning..."
  
  constructor(private othermessageService:Othermessage) { }

  getmessage(){
    return this._message;
  }

}
