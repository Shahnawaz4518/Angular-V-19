import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Templateform } from "./templateform/templateform";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Templateform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f13');
}
