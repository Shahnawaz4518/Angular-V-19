// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Student } from "./student/student";
// import { empoloyee } from "./Employee/employee.component";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, Student, empoloyee],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('myangularapp_f15');
// }






import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { EmployeeComponent } from './Employee/employee.component';
import { Cart } from './cart';
import { ProductCard } from './product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCard],
  // template: `
  //   <h2>Products</h2>

  //   <app-product-card 
  //     name="iPhone 15" 
  //     [price]="80000">
  //   </app-product-card>

  //   <br><br>

  //   <app-product-card 
  //     name="Samsung S24" 
  //     [price]="70000">
  //   </app-product-card>
  // `

template: `
    <h2>🛒 My Store</h2>
    <h3>Cart Items: {{ cart.cartCount() }}</h3>

    <app-product-card
      name="iPhone 15"
      [price]="80000">
    </app-product-card>

    <app-product-card
      name="Samsung S24"
      [price]="70000">
    </app-product-card>
  `

})
export class App {
  title = signal('myangularapp_f15');


  constructor(public cart: Cart) {}
}
