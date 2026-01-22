import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {

  regForm!: any;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.regForm = this._fb.group({
      id: [''],

      fname: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],

      lname: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      mobileno: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],

      // ===============================
      // Dynamic Control in FormArray In Reactive Form
      // ===============================
      skills: this._fb.array([
        new FormControl('', Validators.required)
      ])
    });

    // this.regForm.get('fname')?.valueChanges.subscribe(firstname =>{
    //   console.log("fname value : "+firstname);
    // })

    // this.regForm.get('lname')?.valueChanges.subscribe(lastname => {
    //   console.log('lname value'+lastname)
    // })

    // this.regForm.valueChanges.subscribe(formdata =>{
    //   console.log("fname value : "+formdata.fname);
    //   console.log("lname value : "+formdata.lname);
    // })

    // this.regForm.statusChanges.subscribe(formdata => {
    //   console.log("form status : "+formdata);
    // })
  }

  // ===============================
  // Getter for FormArray
  // ===============================
  get skills(): FormArray {
    return this.regForm.get('skills') as FormArray;
  }

  // ===============================
  // Add Dynamic Control
  // ===============================
  addSkill() {
    this.skills.push(
      new FormControl('', Validators.required)
    );
  }

  // ===============================
  // Remove Dynamic Control
  // ===============================
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  register(formdata: FormGroup) {
    console.log(this.regForm.value);
    console.log(formdata.valid);

    console.log(this.regForm.get('fname')?.value);
    console.log(this.regForm.get('email')?.value);
  }

  reset() {
    this.regForm.reset({});
  }

  filldata() {
    this.regForm.setValue({
      id: 101,
      fname: 'ViratKohli',
      lname: 'Kohli',
      email: 'virat@gmail.com',
      mobileno: '1234567891',
      skills: ['Angular']
    });
  }
}
