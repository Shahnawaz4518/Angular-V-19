import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {

  constructor(private cookie:CookieService){

  }
  getdata(){
    console.log(this.cookie.get("userid"));
    console.log(this.cookie.get("empcode"));
  }

  deletedata(){
    this.cookie.delete("empcode");
  }

  deleteall(){
    this.cookie.deleteAll();
  }

}
