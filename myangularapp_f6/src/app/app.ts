import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f6');


//NgFor Example with ngStyle
/*
  mycountry='USA';

  employees:any[]=[
    {name:'Shahnawaz Khan', country:'India'},
    {name:'Aman Singh', country:'USA'},
    {name:'Sahil Yadav', country:'Turkey'},
    {name:'Rohit Sharma', country:'India'},
    {name:'John Cena', country:'USA'},
    {name:'Smith Joe', country:'UK'},
  ]

  getcolor(country:any){
    switch(country){
      case 'India':
        return 'blue';
      case 'USA':
        return 'green';
      case 'UK':
        return 'red';
      case 'Turkey':
        return 'orange';
    }
    return null;
  }

*/


//NgClass Example 
fontsize=60;

  mycountry='India';

  employees:any[]=[
    {name:'Shahnawaz Khan', country:'India'},
    {name:'Aman Singh', country:'USA'},
    {name:'Sahil Yadav', country:'Turkey'},
    {name:'Rohit Sharma', country:'India'},
    {name:'John Cena', country:'USA'},
    {name:'Smith Joe', country:'UK'},
  ]

  getcolor(country:any){
    switch(country){
      case 'India':
        return 'blue';
      case 'USA':
        return 'green';
      case 'UK':
        return 'red';
      case 'Turkey':
        return 'orange';
    }
    return null;
  }
}
