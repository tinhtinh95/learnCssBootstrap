import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  carts$: Observable<ShoppingCart>;

  constructor(private service: AuthService, private shoppingCartService: ShoppingCartService) {
    service.appUser$.subscribe(appUSer => this.appUser = appUSer);
  }
  async ngOnInit() {
    this.carts$ = (await this.shoppingCartService.getCart());
  }
  logout() {
    this.service.logout();
  }

}
