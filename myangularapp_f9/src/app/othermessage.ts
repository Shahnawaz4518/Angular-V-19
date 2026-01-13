import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Othermessage {

constructor() {}

getothermessage(){
  return "Message From Other Message Service"
}
  
}
