import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthService } from './hardcode-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private checkLogin:HardcodeAuthService,
    private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.checkLogin.isUserLogedIn())
         return true

      this.router.navigate(['/'])   
      return false     
  }
}
