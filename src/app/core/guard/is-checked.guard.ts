import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsCheckedGuard implements CanActivate, CanActivateChild, CanLoad {

  isAuth: boolean;
  constructor() {
    this.isAuth = false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('usertype') === 'Admin' || localStorage.getItem('usertype') === 'User') {
      console.log('Working ...');
      return true;
    } else {
      return false;
    }


  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuth === true) {
      return true;
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuth === true) {
      return true;
    }
  }
  canDeactivate(
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuth === true) {
      return true;
    } else {
      if (confirm('Do You Want To Leave?')) {
        this.isAuth = false;
        return true;
      }
    }
  }
}
