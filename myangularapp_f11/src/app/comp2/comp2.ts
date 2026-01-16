import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {

  getdata(){
    console.log(localStorage.getItem("userid"));
    console.log(localStorage.getItem("empcode"));
    //console.log(JSON.parse(localStorage.getItem("compdata")));

    const parsedData = JSON.parse(localStorage.getItem('compdata') || '{}');
    console.log(parsedData);

  }

  Deletedata(){
    localStorage.removeItem("empcode");
  }
  deleteall(){
    localStorage.clear();
  }

}
