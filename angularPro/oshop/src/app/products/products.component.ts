import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filterProducts: Product[] = [];
  subcription: Subscription;
  category: string;
  cart: any;

  constructor(private productService: ProductService, route: ActivatedRoute, private shoppingCartService: ShoppingCartService) {
    this.subcription = this.productService.getAll()
      .pipe(switchMap((products: Product[]) => {
      this.filterProducts = this.products = products;
      return route.queryParamMap; }))
      .subscribe(params => {
        this.category = params.get('category');
        this.products = (this.category) ?
          this.filterProducts.filter(p => p.category === this.category) :
          this.filterProducts;
      });
  }

  async ngOnInit() {
    this.subcription = (await this.shoppingCartService.getCart())
      .subscribe(cart => {
        this.cart = cart;
        // console.log(cart)
      });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
// cach 1: Dung 2 subscribe
    // this.subcription = this.productService.getAll().subscribe((products: Product[]) => {
    //   this.filterProducts = this.products = products;
    //   route.queryParamMap.subscribe(params => {
    //     this.category = params.get('category');
    //     this.products = (this.category) ?
    //       this.filterProducts.filter(p => p.value['category'] === this.category) :
    //       this.filterProducts;
    //   });
    // });

    // thay bang switchMap
