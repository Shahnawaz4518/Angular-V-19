import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bookservice } from './bookservice';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp_f21');

   AllBooks:Book[]= [];
  AllBooks$ !:Observable<Book[]>;

  booksaftersaved:Book[]=[];
  bookafterupdate:Book[]=[];
  bookafterdelete:Book[]=[];


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
      },
      (err:HttpErrorResponse) =>{
        if(err.error instanceof Error){
          //Client Side error or network error
          console.log("Client side error", err.error.message);
        }else{
          //backend related error
          console.log(err);
         // console.log("Server side error", err.status, err.message);
        }
      }
    )


      //using Observable
      this.AllBooks$=this._bookservice.getBooks();
  }

  getAllBooksaftersaved(){
    this._bookservice.getBooks().subscribe(res=>{
        this.bookafterupdate=res;
    })

  }

    getAllBooksafterupdate(){
    this._bookservice.getBooks().subscribe(res=>{
        this.booksaftersaved=res;
    })

  }

  getBookAfterDelete(){
      this._bookservice.getBooks().subscribe(res=>{
        this.bookafterdelete=res;
    })
  }

  saveBook(book:Book){
     this._bookservice.createBook(book).subscribe(res=>{
      console.log(res);
      this.getAllBooksaftersaved();
     });
  }

  insertbook(){
   let newBookbook={id:6, name:'Django', category:'Web Dev', year:'2018'};
   this.saveBook(newBookbook);
  }

  updatebook(){

    let changebook= {id:3, name:'Java', category:'Programming Language', year:'2026'};

    this._bookservice.updateBook(changebook).subscribe(res=>{
      console.log(res);
      this.getAllBooksafterupdate();
     
    },
  (err:HttpErrorResponse) =>{
        if(err.error instanceof Error){
          //Client Side error or network error
          console.log("Client side error", err.error.message);
        }else{
          //backend related error
          console.log(err);
         // console.log("Server side error", err.status, err.message);
        }
      });
  }


  deleteBook(){
  this.deleteData(3);
  }


  deleteData(id: number){
    this._bookservice.DeleteBook(id).subscribe(res=>{
      console.log(res);
      this. getBookAfterDelete();
    })
  }
}