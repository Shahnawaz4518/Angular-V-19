import { Component } from '@angular/core';
import { Numlist } from '../numlist';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
  providers:[Numlist]
})
export class Comp2 {

  list1:number[]=[];
    constructor(private numlistService:Numlist){
      this.list1=numlistService.getlist();
  
    }
    addNumber(val:any){
       this.numlistService.addnum(val);
       this.list1=this.numlistService.getlist()
    }
  
  }
  

