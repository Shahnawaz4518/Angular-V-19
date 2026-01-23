import { Component, Input } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <div class="card">
      <h3>{{ name }}</h3>
      <p>₹{{ price }}</p>
      <button (click)="add()">Add to Cart</button>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ccc;
      padding: 10px;
      width: 200px;
    }
  `]
})
export class ProductCard {
    @Input() name!: string;
  @Input() price!: number;

  constructor(private cart: Cart) {}

  add() {
    this.cart.addToCart();
  }
}
