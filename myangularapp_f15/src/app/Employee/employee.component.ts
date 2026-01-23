import { Component } from "@angular/core";

@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html',
// template:'<h1>Hello Creating Componenet Without CLI</h1>'
// styles:['h1{background-color:red}']
    styleUrl:'./employee.component.css'
})


export class empoloyee{

}






// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-product-card',
//   standalone: true,
//   template: `
//     <div style="border:1px solid #99eff5; padding:10px; width:200px;">
//       <h3>{{ name }}</h3>
//       <p>₹{{ price }}</p>
//       <button (click)="add()">Add to Cart</button>
//     </div>
//   `
// })
// export class EmployeeComponent {
//   @Input() name!: string;
//   @Input() price!: number;

//   add() {
//     alert(this.name + ' added');
//   }
// }
