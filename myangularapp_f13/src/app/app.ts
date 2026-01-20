import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Templateform } from "./templateform/templateform";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Templateform, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f13');
}
