import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from 'src/app/models/product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];
    constructor(public itemsMap: {[productId: string]: ShoppingCartItem }) {
        for (const productId of Object.keys(itemsMap)) {
            const item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    get totalItemsCount() {
        let count = 0;
        for (const productId of Object.keys(this.itemsMap)) {
            count += this.itemsMap[productId].quantity;
        }
        return count;
    }
    get totalPrice() {
        let sum = 0;
        for (const productId of Object.keys(this.itemsMap)) {
            sum += (this.itemsMap[productId].quantity * this.itemsMap[productId].product.price);
        }
        return sum;
    }


    getQuantity(product: Product) {
        // if (!this.shoppingCart) {
        //   return 0;
        // }
        const item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }

}
