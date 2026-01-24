import { Component } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-product',
  imports: [],
  //templateUrl: './product.html',
  template: `
    <h3>Product: iPhone 15</h3>

    <button (click)="cart.addToCart()">Add to Cart</button>
    <button (click)="cart.removeFromCart()">Remove</button>
  `
  //styleUrl: './product.css',
})
export class Product {
  constructor(public cart: Cart) {}

}
