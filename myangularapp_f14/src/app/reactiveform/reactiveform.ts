import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {

regForm!: FormGroup;

constructor(private _fb:FormBuilder){}

// ngOnInit(){
//   this.regForm=new FormGroup({
//       id:new FormControl(),
//       fname:new FormControl(),
//       lname:new FormControl(),
//       email:new FormControl(),
//       mobileno:new FormControl(),

      
//   })
// }


// ngOnInit(){
//   this.regForm=this._fb.group({
//       id:new FormControl(''),
//       fname:new FormControl(''),
//       lname:new FormControl(''),
//       email:new FormControl(''),
//       mobileno:new FormControl('1234567891'),

      
//   })
// }


ngOnInit() {
    this.regForm = this._fb.group({
      id: [''],

      fname: ['', [
        Validators.required,
        Validators.minLength(10)]],

      lname: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      mobileno: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]]
    });
  }

  register(formdata: FormGroup) {
    console.log(this.regForm.value);
    console.log(formdata.valid);
  }
}
