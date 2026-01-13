import { Component } from '@angular/core';
import { Numlist } from '../numlist';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
  providers:[Numlist]
})
export class Comp1 {
   
  list1:number[]=[];
  constructor(private numlistService:Numlist){
    this.list1=numlistService.getlist();

  }
  addNumber(val:any){
     this.numlistService.addnum(val);
     this.list1=this.numlistService.getlist()
  }

}
