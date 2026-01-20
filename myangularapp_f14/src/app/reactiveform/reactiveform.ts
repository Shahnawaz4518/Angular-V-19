import { Component } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
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


ngOnInit(){
  this.regForm=this._fb.group({
      id:[''],
      fname:[''],
      lname:[''],
      email:[''],
      mobileno:[''],

      
  })
}

register(formdata:FormGroup){
  //console.log(formdata.value)
   console.log(this.regForm.value);
   console.log(formdata.valid)
}

}
