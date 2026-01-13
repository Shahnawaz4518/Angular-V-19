import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Message {

  _message="Hello Welcome To Angular Tutorail Learning..."
  
  constructor() { }

  getmessage(){
    return this._message;
  }

}
