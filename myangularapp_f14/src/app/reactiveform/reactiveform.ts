import { Component } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {

regForm!: FormGroup;

constructor(){}

ngOnInit(){
  this.regForm=new FormGroup({
      id:new FormControl(),
      fname:new FormControl(),
      lname:new FormControl(),
      email:new FormControl(),
      mobileno:new FormControl(),

      
  })
}

}
