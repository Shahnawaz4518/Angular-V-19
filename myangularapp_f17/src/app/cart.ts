import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  
    // store cart items count
  cartCount = signal(0);

  // derived state
  hasItems = computed(() => this.cartCount() > 0);

  addToCart() {
    this.cartCount.update(v => v + 1);
  }

  removeFromCart() {
    this.cartCount.update(v => Math.max(0, v - 1));
  }
}
