import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor() { }

  addToCart(product: Product) {
    let cardId= localStorage.getItem('cardId');
    if (!cardId) {

    }
  }
}
