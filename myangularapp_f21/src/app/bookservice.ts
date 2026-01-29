import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  

  private apiUrl="/api/books";

  constructor (private _http:HttpClient) {}

  getBooks():Observable<Book[]>{
  // return this._http.get<Book[]>(this.apiUrl);

  //using optional parameter
  return this._http.get<Book[]>(this.apiUrl, {responseType:'json'});


  //if we want headers it's option for using checking in backend

  let httheaders=new HttpHeaders().set("Accept","application/json");
  return this._http.get<Book[]>(this.apiUrl, {headers:httheaders});
}

createBook(book:Book):Observable<Book>{
  const headers = new HttpHeaders().set("Content-Type","application/json");

  return this._http.post<Book>(this.apiUrl,book,{
    headers: headers
  })
 }
}