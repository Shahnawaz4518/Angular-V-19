import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })   
export class Numlist {
  
  list:number[]=[100];

  constructor(){ }

  addnum(num:number){
       this.list.push(num);
  }
  getlist(){
    return this.list;
  }
}
