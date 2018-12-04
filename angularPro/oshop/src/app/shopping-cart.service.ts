import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from './models/product';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private getCart(cardId: string){
    return this.db.object('/shopping-carts' + cardId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId() {
    let cardId= localStorage.getItem('cardId');
    if (cardId) { return cardId; }
    let result = await this.create();
    localStorage.setItem('cardId', result.key);
    return result.key;
    
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    console.log(cartId);
    console.log(product, product.key);
    let itemTmp = this.getItem(cartId, product.key);
    let item$ = itemTmp.valueChanges();
    console.log(item$);
    item$.pipe(take(1)).subscribe(item => {
      if (item) {
        itemTmp.update({ quantity: item.quantity + 1});
      } else {
        itemTmp.set({ product: product, quantity:1 })
      }
    })
  }
}
