import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedFromData = childRoute.data.isLogged;
    if (typeof isLoggedFromData === 'boolean' && isLoggedFromData === !!this.authService.getToken('user-token')) {
      return true;
    }
    const url = this.router.url;
    this.router.navigateByUrl(url);
    return false;
  }

}
