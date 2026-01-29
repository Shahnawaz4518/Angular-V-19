import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // GET
  getdata(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST
  saveBook(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // PUT
  updateBook(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}
