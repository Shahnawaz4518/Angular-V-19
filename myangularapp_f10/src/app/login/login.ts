import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  login(userid:any,password:any){

    if(userid=='shahnawaz' && password=='123'){
      sessionStorage.setItem("isloggedIn","true");
    }else{
      sessionStorage.setItem("isloggedIn","false");
    }
      
  }

}
