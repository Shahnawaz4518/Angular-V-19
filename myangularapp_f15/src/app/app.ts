import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from "./student/student";
import { empoloyee } from "./Employee/employee.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Student, empoloyee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f15');
}
