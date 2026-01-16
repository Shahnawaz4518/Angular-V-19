import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {

  constructor(private cookie : CookieService){
     cookie.set("userid","klrahul01");
  }
  setdata(){
    this.cookie.set("empcode","12345");
  }

}
