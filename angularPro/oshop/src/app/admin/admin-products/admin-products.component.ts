import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products$: Product[];
  productsFilter: Product[];
  subsciption: Subscription;

  constructor(private productService: ProductService) {
    this.subsciption = this.productService.getAll().subscribe(products => {
      this.productsFilter = this.products$ = products.map(product => {
        return <Product>{
          id: product.key,
          title: product.value['title'],
          price: product.value['price'],
          category: product.value['category'],
          imageUrl: product.value['imageUrl']
        }
      })
      
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  filter(query: string) {
    this.products$ = (query) ?
      this.productsFilter.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.productsFilter;
    console.log(query);
  }

  delete(productId){
    if(confirm('Are you sure to delete this item')){
      this.productService.delete(productId);
    }
  }

}
