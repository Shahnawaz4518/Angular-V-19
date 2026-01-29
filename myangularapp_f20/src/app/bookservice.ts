import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // addBook(book: Book) {
  //   return this.http.post(this.apiUrl, book);
  //   console.log('Book added' , book);
  // }

  addBook() {
    return this.http.get(this.apiUrl)
    // console.log('Book added' , book);
  }

}
