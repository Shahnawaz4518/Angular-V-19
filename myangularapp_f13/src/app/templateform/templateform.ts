import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule, CommonModule],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {

  register(regdata : NgForm){
    console.log(regdata.value);
    console.log(regdata.valid);

  }
}
