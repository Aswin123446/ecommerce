import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0); 

  cartCount$ = this.cartCount.asObservable(); 

  constructor() {
    this.updateCartCount(); 
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.updateCartCount(); 
  }

  getCartItems() {
    return this.cart;
  }
  removeFromCart(index: number) {
    this.cart.splice(index, 1); 
    this.updateCartCount();
  }

  
  public updateCartCount() {
    this.cartCount.next(this.cart.length); 
  }
}
