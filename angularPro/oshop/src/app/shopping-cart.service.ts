import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from './models/product';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    const cart = this.db.object('/shopping-carts/' + cartId).snapshotChanges().pipe(
      map((action: any) => {
        if (action.payload.val()) {
          const key = action.key;
          const items = action.payload.val().items;
          return new ShoppingCart(items);
        }
        return null;
      })
    );
    return cart;
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    const cardId = localStorage.getItem('cardId');
    if (cardId) { return cardId; }
    const result = await this.create();
    localStorage.setItem('cardId', result.key);
    return result.key;
  }

  async addToCart(product: Product) {
    this.updateQuantity(product, 1);
  }

  async removeToCart(product: Product) {
    this.updateQuantity(product, -1);
  }

  private async updateQuantity(product: Product, num: number) {
    const cartId = await this.getOrCreateCartId();
    const itemTmp = this.getItem(cartId, product.key);
    const item$ = itemTmp.valueChanges();
    item$.pipe(take(1)).subscribe(item => {
      itemTmp.update({ product: product, quantity: (item ? item['quantity'] : 0) + num });
    });
  }
  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    const cart = this.db.object('/shopping-carts/' + cartId).remove();
  }
}
