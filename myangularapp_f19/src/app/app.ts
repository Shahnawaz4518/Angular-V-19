import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bookservice } from './bookservice';
import { Book } from './book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f19');

  AllBooks: Book[] = [];


  constructor(private _bookservice:Bookservice) {

  }
  ngOnInit() {
    this.getAllBooks();
    // console.log(this.AllBooks);
  }

  getAllBooks(){
      this._bookservice.getBooks().subscribe(res=>{
        console.log(res);
        this.AllBooks=res;
        console.log("g",this.AllBooks);
      })
  }
}
