import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {

  company={
    name:"Angular Learning Phase",
    city:"Mumbai",
    state:"Maharashtra",
    country:"India"
  }

  setdata(){
    localStorage.setItem("empcode","dhoni007")

    localStorage.setItem("compdata",JSON.stringify(this.company));
  }
}
