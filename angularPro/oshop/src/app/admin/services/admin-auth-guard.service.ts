import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'shared/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private service: AuthService, private router: Router, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.service.user$.pipe(switchMap(user => this.userService.get(user.uid) ))
    .pipe(map(appUser => appUser.isAdmin));
  }
}
