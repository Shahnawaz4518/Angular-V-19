import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Bookservice } from './bookservice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  updatedBook = signal<any>(null);
  posts: any[] = [];
  loading = false;

  private createdPostId!: number;

  constructor(private bookService: Bookservice) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.loading = true;
    this.bookService.getdata().subscribe({
      next: res => {
        this.posts = res;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // POST
  saveBook() {
    const data = {
      title: 'New Angular Book',
      body: 'POST HttpClient example',
      userId: 1000
    };

    this.bookService.saveBook(data).subscribe(res => {
      console.log('Saved:', res);
      this.createdPostId = res.id;
      this.posts.unshift(res); // update UI
    });
  }

  // PUT
  putData() {
    if (!this.createdPostId) {
      alert('Please save book first!');
      return;
    }

    const updatedData = {
      title: 'Angular 19 Updated',
      body: 'HttpClient PUT example',
      userId: 1
    };

    this.bookService.updateBook(this.createdPostId, updatedData)
      .subscribe(res => {
        console.log('Updated:', res);
        this.updatedBook.set(res);

        const index = this.posts.findIndex(p => p.id === this.createdPostId);
        this.posts[index] = res;
      });
  }
}
