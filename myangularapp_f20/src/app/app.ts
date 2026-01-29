import { Component, signal, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bookservice} from './bookservice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [Bookservice],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('myangularapp_f20');

  book = {
    userId: 1,
    title: 'Angular 19',
    body: 'Shahnawaz',
    id: 499
  };
  

  constructor(private bookService: Bookservice) {
    // console.log(this.posts)
  }

  posts : any = []
  // // saveBook() {
  // //   this.bookService.addBook().subscribe({
  // //     next: (res: any) => console.log('Book saved', res),
  // //     error: (err: any) => console.log('Error', err)
  // //   });
  // // }
  saveBook() {
    this.bookService.addBook().subscribe(res => {
      console.log('Book saved', res);
      this.posts = res
      console.log(this.posts)
      
    });
  }

  putData(){
    console.log(...this.posts,this.book)
    this.posts.push(this.book)
  }

  // posts: any[] = [];
loading = true;

ngOnInit() {
  this.bookService.addBook().subscribe({
    next: (res: any) => {
      this.posts = res;
      this.loading = false;
    },
    error: () => this.loading = false
  });
}

  
}
