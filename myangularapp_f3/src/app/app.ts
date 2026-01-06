import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f3');
  
  //isvalid=true; //Dyanmaic way to show/hide content based on condition.

 isLoggedIn=false;

 age=30;

  login(){
    this.isLoggedIn=true;
  }

  logout(){
    this.isLoggedIn=false;
  }
 
}