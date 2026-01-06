import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Childcomponent } from "./childcomponent/childcomponent";

@Component({
  selector: 'app-root',
  imports: [Childcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f2');

  Cdata:any;
}
