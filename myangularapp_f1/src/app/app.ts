import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from "./student/student";
import { Book } from './book/book';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Student, Book, Employee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f1');
  name = "Shahnawaz Khan";


  // @HostListener---> Decorator

   @HostListener('click')
   show(){
    alert("hello");
   }
}
