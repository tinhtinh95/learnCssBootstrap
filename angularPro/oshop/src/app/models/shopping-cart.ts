import { ShoppingCartItem } from './shopping-cart-item';

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
            sum += this.itemsMap[productId].quantity;
        }
        return sum;
    }
}
