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
  protected readonly title = signal('myangularapp_f5');

  employees:any[]=[
    {id:101,name:'Shahnawaz Khan'},
    {id:102,name:'Amit Kumar'},
    {id:103,name:'Suresh Raina'},
    {id:104,name:'MS Dhoni'},
  ]
}
