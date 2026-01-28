import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  
private apiUrl="/api/books";

  constructor (private _http:HttpClient) {}

  getBooks():Observable<Book[]>{
  return this._http.get<Book[]>(this.apiUrl);
}
}
