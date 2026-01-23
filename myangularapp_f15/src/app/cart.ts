import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cartCount = signal(0);

  addToCart() {
    this.cartCount.update(count => count + 1);
  }

}
