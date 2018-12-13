import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import {DataTableModule} from 'angular-6-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryService } from './category.service';
import { ProductService } from 'src/app/product.service';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { OrderService } from './order.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule, // validate
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    AdminAuthGuardService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
