import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';


import { HttpModule, Http, BaseRequestOptions } from '@angular/http';

import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {AdminAuthGuard} from './services/admin-auth-guard.service';
import {OrderService} from './services/order.service';

// export function getAuthHttp(http) {
//   return new AuthHttp(new AuthConfig({
//     tokenName: 'token'
//   }), http);
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    NotFoundComponent,
    NoAccessComponent,
    SignupComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]},
      {path: 'no-access', component: NoAccessComponent},
      {path: 'login', component: LoginComponent},
    ])
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    // AuthHttp,
    // {
    //   provide: AuthHttp,
    //   useFactory: getAuthHttp,
    //   deps: [Http]
    // },
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
