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

    //get value
    console.log(this.regForm.get('fname')?.value);
    console.log(this.regForm.get('email')?.value);
  }

  reset(){
    //this.regForm.reset();


    //static way to get data particaaly received
    // this.regForm.reset({
    //   fname:'Virat'
    // })


    //dynamic way to get data partially received
    this.regForm.reset({
      fname: this.regForm.get('fname')?.value
    })
  }
}
