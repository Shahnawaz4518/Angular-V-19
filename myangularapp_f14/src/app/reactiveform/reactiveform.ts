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

    // this.regForm.get('fname')?.valueChanges.subscribe(firstname =>{
    //   console.log("fname value : "+firstname);
    // })

    // this.regForm.get('lname')?.valueChanges.subscribe(lastname => {
    //   console.log('lname value'+lastname)
    // })


    // if we cant to apply whole form then we use
    // this.regForm.valueChanges.subscribe(formdata =>{
    //   console.log("fname value : "+formdata.fname);
    //   console.log("lname value : "+formdata.lname);
      
    // })



    // for status is valid or not
    // this.regForm.get('fname')?.statusChanges.subscribe(firstnamestatus => {
    //   console.log("fname status : "+firstnamestatus);
    // })

    // this.regForm.get('lname')?.statusChanges.subscribe(lastnamestatus => {
    //   console.log("lname status : "+lastnamestatus);
    // })



    //for whole form 

    this.regForm.statusChanges.subscribe(formdata => {
      console.log("form status : "+formdata);
    })


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


    //static way to get data particaaly received and reset
    // this.regForm.reset({
    //   fname:'Virat'
    // })


    //dynamic way to get data partially received and reset
    this.regForm.reset({
      
    })
  }


  // if we need fill full data on form we use set value and if we want fill partically we use patched value
  filldata(){
    this.regForm.setValue({
      id:101,
      fname:'ViratKohli',
      lname:'Kohli',
      email:'virat@gmail.com',
      mobileno:'1234567891'
    })
  }
}
